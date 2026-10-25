# API Reference: Client-Side Services & Hooks

## 1. `GestureManager` Service (`src/services/GestureManager.js`)

### `initialize(): Promise<void>`
- Downloads WASM vision binaries and initializes the MediaPipe gesture recognizer model with GPU delegate.

### `startCamera(videoElement: HTMLVideoElement): Promise<boolean>`
- Requests user webcam permissions via `navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } })`.
- Attaches the media stream to the supplied offscreen video element.

### `stop(): void`
- Iterates all active tracks on the webcam stream and halts optical capture.

## 2. Recognized Gestures & Action Table

| Gesture Category Name | Required Confidence | Dispatched Action |
|---|---|---|
| `Open_Palm` | $\ge 0.75$ | `video.pause()` |
| `Closed_Fist` | $\ge 0.75$ | `video.play()` |
| `Pointing_Up` | $\ge 0.75$ | `video.currentTime += 10` |
| `Victory` | $\ge 0.75$ | `video.currentTime -= 10` |
| `Thumb_Up` | $\ge 0.75$ | Mark step completed / Volume up |
