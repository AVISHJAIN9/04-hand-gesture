import React, { useState } from 'react';
import ChefVideoPlayer from './components/ChefVideoPlayer';
import { Hand, UtensilsCrossed, Sparkles, Video, HelpCircle } from 'lucide-react';

function App() {
  const [videoUrl, setVideoUrl] = useState(
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  );
  const [customInput, setCustomInput] = useState('');

  const sampleVideos = [
    { name: 'Demo Video (Nature)', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
    { name: 'Kitchen Recipe Clip', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
    { name: 'Tech Showcase', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
  ];

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (customInput.trim()) {
      setVideoUrl(customInput.trim());
      setCustomInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-800 gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                  Touchless Chef <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded-full font-mono">CV AI</span>
                </h1>
                <p className="text-sm text-gray-400">Hands-Free Gesture Controlled Video Player for Cooking & Workshops</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900 border border-gray-800 px-3 py-2 rounded-xl">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Powered by MediaPipe Vision Tasks</span>
          </div>
        </header>

        {/* Main Player Component */}
        <main className="space-y-6">
          <ChefVideoPlayer videoSrc={videoUrl} />

          {/* Quick Video Switcher */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <Video className="w-4 h-4 text-emerald-400" />
                Select Recipe / Video Stream
              </h2>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {sampleVideos.map((vid, idx) => (
                <button
                  key={idx}
                  onClick={() => setVideoUrl(vid.url)}
                  className={`text-xs px-3.5 py-2 rounded-xl border transition ${
                    videoUrl === vid.url
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-medium'
                      : 'bg-gray-800/80 hover:bg-gray-800 text-gray-300 border-gray-700/60'
                  }`}
                >
                  {vid.name}
                </button>
              ))}
            </div>

            <form onSubmit={handleCustomSubmit} className="flex gap-2 pt-2">
              <input
                type="url"
                placeholder="Paste direct MP4 or WebM video URL..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                className="flex-1 bg-gray-950 border border-gray-800 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-xl text-sm font-medium transition"
              >
                Load Video
              </button>
            </form>
          </div>

          {/* Gesture Control Reference Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-semibold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-400" />
              Supported Hand Gestures
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3.5 text-center space-y-1.5">
                <div className="text-2xl">✋</div>
                <div className="text-xs font-semibold text-white">Open Palm</div>
                <div className="text-[11px] text-gray-400">Play / Pause</div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3.5 text-center space-y-1.5">
                <div className="text-2xl">☝️</div>
                <div className="text-xs font-semibold text-white">Pointing Up</div>
                <div className="text-[11px] text-gray-400">Jump Forward (+10s)</div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3.5 text-center space-y-1.5">
                <div className="text-2xl">✌️</div>
                <div className="text-xs font-semibold text-white">Victory / Peace</div>
                <div className="text-[11px] text-gray-400">Jump Back (-10s)</div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3.5 text-center space-y-1.5">
                <div className="text-2xl">👍</div>
                <div className="text-xs font-semibold text-white">Thumb Up</div>
                <div className="text-[11px] text-gray-400">Zoom In (125%)</div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3.5 text-center space-y-1.5">
                <div className="text-2xl">👎</div>
                <div className="text-xs font-semibold text-white">Thumb Down</div>
                <div className="text-[11px] text-gray-400">Reset Zoom (100%)</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
