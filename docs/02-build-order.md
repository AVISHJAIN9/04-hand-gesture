# Step-by-Step Build Order

## Rebuilding Touchless Chef from Scratch

### Phase 1: Vite Project & MediaPipe Setup
1. Initialize Vite project with React 18: `npm create vite@latest . -- --template react`.
2. Install dependencies: `npm i @mediapipe/tasks-vision lucide-react`.
3. Configure Tailwind CSS in `tailwind.config.js` and `index.css`.

### Phase 2: MediaPipe Vision Singleton
1. Create `src/services/GestureManager.js`.
2. Configure `FilesetResolver.forVisionTasks` pointing to official CDN Wasm binaries.
3. Instantiate `GestureRecognizer` with `delegate: "GPU"` and `minHandDetectionConfidence: 0.7`.
4. Implement `startCamera` binding `navigator.mediaDevices.getUserMedia` to an offscreen video element.

### Phase 3: Video Player & Frame Analysis Loop
1. Build `src/components/ChefVideoPlayer.jsx` with hidden camera ref and primary video element ref.
2. Implement `predictLoop` utilizing `requestAnimationFrame` and `GestureRecognizer.recognizeVideo`.
3. Introduce 1500ms time-decay debounce filter using `Date.now()`.

### Phase 4: Gesture Action Dispatcher
1. Create `src/utils/gestureMap.js` mapping gesture strings to video actions.
2. Wire `executeCommand` to mutate video `paused`, `currentTime`, and `volume` properties.
3. Build responsive HUD overlays displaying active gesture feedback and camera status pills.

### Phase 5: App Shell & Video Ingestion
1. Build `src/App.jsx` with recipe presets and custom MP4 URL input.
2. Test gesture responsiveness across varying kitchen lighting conditions.
