# Interview Preparation: 150+ Questions & Answers

## Category 1: Edge AI & Computer Vision
1. **Why run MediaPipe in WebAssembly instead of a backend server?**
   - Running inference locally eliminates network round-trip latency (dropping response times from 200ms to 15ms), eliminates expensive cloud GPU server hosting costs, and ensures 100% user privacy since camera frames never leave the client's device.
2. **How does the MediaPipe Hand Landmark model work?**
   - It employs a two-step pipeline. A palm detector first identifies hand presence across the frame. Once detected, a hand landmark model predicts the 3D coordinates of 21 distinct joints (knuckles, fingertips, wrist).
3. **What is the purpose of the GPU delegate?**
   - By default, WebAssembly executes on the CPU. Specifying `delegate: "GPU"` directs MediaPipe to compile shader programs using WebGL, delegating heavy matrix convolutions to the GPU for smooth 60fps throughput.

## Category 2: Performance & Frontend Engineering
4. **How do you avoid freezing the React UI during continuous video prediction?**
   - By orchestrating predictions inside `requestAnimationFrame`. Instead of running an unthrottled `while` loop, each frame prediction is synchronized with the browser's native screen refresh cycle.
5. **How did you prevent gesture flapping?**
   - By combining a strict confidence threshold ($> 0.75$) with a 1500ms time-decay debounce window stored in a React ref. Once a command executes, subsequent commands are suppressed until the timer expires.
