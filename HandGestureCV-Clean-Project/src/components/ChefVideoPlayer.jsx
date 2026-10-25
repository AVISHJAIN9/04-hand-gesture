import React, { useEffect, useRef, useState } from "react";
import GestureManager from "../services/GestureManager";
import { Hand, Camera, Eye, EyeOff, Play, Pause, FastForward, Rewind, ZoomIn, ZoomOut } from "lucide-react";

const ChefVideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const hiddenCamRef = useRef(null);
  const lastActionTime = useRef(0);
  const [activeGesture, setActiveGesture] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [feedback, setFeedback] = useState("Waiting for gesture...");

  useEffect(() => {
    let animId;
    const setup = async () => {
      try {
        await GestureManager.initialize();
        const hasAccess = await GestureManager.startCamera(hiddenCamRef.current);
        if (hasAccess) {
          setCameraActive(true);
          const predictLoop = () => {
            if (GestureManager.recognizer && hiddenCamRef.current?.readyState === 4) {
              const results = GestureManager.recognizer.recognizeVideo(hiddenCamRef.current, Date.now());
              
              if (results.gestures && results.gestures.length > 0) {
                const gesture = results.gestures[0][0].categoryName;
                const score = results.gestures[0][0].score;
                
                if (score > 0.75) {
                  setActiveGesture(gesture);
                  if (Date.now() - lastActionTime.current > 1500) {
                    executeCommand(gesture);
                    lastActionTime.current = Date.now();
                  }
                }
              } else {
                setActiveGesture(null);
              }
            }
            animId = requestAnimationFrame(predictLoop);
          };
          animId = requestAnimationFrame(predictLoop);
        }
      } catch (err) {
        console.error("Gesture tracking error:", err);
      }
    };

    setup();
    return () => {
      if (animId) cancelAnimationFrame(animId);
      GestureManager.stop();
    };
  }, []);

  const executeCommand = (gesture) => {
    const video = videoRef.current;
    if (!video) return;

    switch (gesture) {
      case "Open_Palm":
        if (video.paused) {
          video.play();
          setIsPlaying(true);
          setFeedback("▶️ Playing");
        } else {
          video.pause();
          setIsPlaying(false);
          setFeedback("⏸️ Paused");
        }
        break;
      case "Pointing_Up":
        video.currentTime = Math.min(video.duration, video.currentTime + 10);
        setFeedback("⏩ Jumped Forward (+10s)");
        break;
      case "Victory":
        video.currentTime = Math.max(0, video.currentTime - 10);
        setFeedback("⏪ Jumped Backward (-10s)");
        break;
      case "Thumb_Up":
        video.style.transform = "scale(1.25)";
        video.style.transition = "transform 0.3s ease";
        setFeedback("🔍 Zoomed In (125%)");
        break;
      case "Thumb_Down":
        video.style.transform = "scale(1)";
        video.style.transition = "transform 0.3s ease";
        setFeedback("🔎 Zoom Reset (100%)");
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl">
      {/* 1. Main Video Display */}
      <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
          controls
          className="w-full h-full object-contain"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Floating Gesture Overlay Feedback */}
        {feedback && (
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium text-emerald-400 animate-fade-in pointer-events-none">
            <Hand className="w-4 h-4 text-emerald-400" />
            <span>{feedback}</span>
          </div>
        )}

        {/* Live Detected Gesture Tag */}
        {activeGesture && (
          <div className="absolute top-4 right-4 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm animate-pulse">
            Detected: {activeGesture.replace("_", " ")}
          </div>
        )}

        {/* Optional Webcam Preview Inset */}
        <div className={`absolute bottom-16 right-4 w-40 aspect-video rounded-lg overflow-hidden border-2 border-emerald-500/50 shadow-lg bg-gray-950 transition-all ${showPreview ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <video
            ref={hiddenCamRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover -scale-x-100"
          />
          <div className="absolute bottom-1 left-1.5 text-[10px] bg-black/60 px-1.5 py-0.5 rounded text-white font-mono">
            Vision Feed
          </div>
        </div>
      </div>

      {/* 2. Control Bar & Status */}
      <div className="p-4 bg-gray-900/90 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${cameraActive ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`} />
          <span className="text-sm font-medium text-gray-300">
            {cameraActive ? "Touchless Control Active (Camera ON)" : "Initializing MediaPipe Vision Model..."}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-1.5 text-xs bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-1.5 rounded-lg border border-gray-700 transition"
          >
            {showPreview ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            {showPreview ? "Hide Camera Inset" : "Show Camera Inset"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefVideoPlayer;
