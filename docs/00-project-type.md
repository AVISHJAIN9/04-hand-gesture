# Step 0 Pre-Check: Project Type Detection

## Detected Project Type
**Primary Type**: Client-Side Computer Vision & Touchless Human-Computer Interaction (HCI) Web Application (React 18 + Google MediaPipe Vision Tasks + WebAssembly + WebGL GPU Delegate)
**Sub-Category**: Real-Time Optical Landmark Classification, Hands-Free Video Player for Kitchen & Workshop Environments, Zero-Server Privacy Architecture.

## Evidence
- **Computer Vision Framework**: `@mediapipe/tasks-vision` 0.10.14 (`package.json`, `src/services/GestureManager.js`), `FilesetResolver.forVisionTasks`, `GestureRecognizer.createFromOptions`.
- **Inference Mode**: Local WebAssembly runtime (`float16/1/gesture_recognizer.task`) running client-side with GPU delegate (`delegate: "GPU"`).
- **Frontend Architecture**: React 18.3.1, Vite 5.4.11, Tailwind CSS 3.4.15, `lucide-react` 0.441.0.
- **Hardware Interface**: `navigator.mediaDevices.getUserMedia` 640x480 30fps optical webcam stream.

## Documentation Track
- **Computer Vision / Frontend HCI Track**: Deep dive into in-browser Wasm execution, tensor confidence thresholds, frame-rate stabilization loops, gesture debounce heuristics, and zero-latency client-side interaction.
