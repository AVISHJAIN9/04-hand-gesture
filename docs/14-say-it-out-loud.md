# Say It Out Loud: Comprehensive Spoken Scripts

## 30-Second Elevator Pitch
"I built Touchless Chef, a zero-latency computer vision web application that enables hands-free video control for home cooks and workshop makers whose hands are dirty or occupied. Using React 18 and Google MediaPipe Vision Tasks running locally via WebAssembly and WebGL GPU acceleration, it tracks hand landmarks at 30 frames per second without sending a single pixel to an external server. It translates natural gestures like Open Palm and Closed Fist into instant video controls with a 1500ms debounce safety threshold."

## Feature Scripts
- **F1 (Wasm Vision Pipeline)**: "I architected the computer vision engine to execute entirely within the client's browser using WebAssembly and WebGL GPU acceleration..."
- **F2 (Frame Loop & Debounce)**: "One of the biggest challenges in optical gesture control is preventing accidental double-triggers, known as gesture flapping..."
- **F3 (Kitchen Gesture Map)**: "I designed the gesture vocabulary specifically around natural kitchen movements..."
- **F4 (Privacy & HUD)**: "Privacy was the primary architectural consideration for this project..."
- **F5 (Recipe Player)**: "To make the application versatile beyond built-in demo clips, I built an ingestion pipeline supporting custom video streams..."
