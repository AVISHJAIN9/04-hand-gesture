# Project Pitch: Touchless Chef Gesture CV

## 30-Second Elevator Pitch
"I built Touchless Chef, a zero-latency computer vision web application that enables hands-free video control for home cooks and workshop makers whose hands are dirty or occupied. Using React 18 and Google MediaPipe Vision Tasks running locally via WebAssembly and WebGL GPU acceleration, it tracks hand landmarks at 30 frames per second without sending a single pixel to an external server. It translates natural gestures like Open Palm and Closed Fist into instant video controls with a 1500ms debounce safety threshold."

## 2-Minute Comprehensive Pitch
"Anyone who has ever tried following an online cooking tutorial knows the frustration: your hands are covered in raw chicken, flour, or olive oil, and you need to pause or rewind the video. You either have to wash your hands every few minutes or smudge your expensive device screen.

To eliminate this friction, I built Touchless Chef. Rather than relying on a heavy cloud-hosted vision API that introduces latency and privacy concerns, I engineered a 100% client-side computer vision pipeline. The application leverages Google's MediaPipe Tasks Vision framework, pulling pre-compiled WebAssembly binaries and a float16 quantized neural network model running directly on the user's graphics card via a WebGL delegate.

The application captures optical video at 640x480 resolution through `navigator.mediaDevices.getUserMedia`. Inside an optimized `requestAnimationFrame` render loop, incoming frames are analyzed for 21-point 3D hand landmark topologies. When a gesture—such as an Open Palm to pause or a Closed Fist to play—is detected with greater than 75% confidence, it passes through a 1500ms time-decay debounce filter to eliminate accidental double-triggers. 

Because all tensor math executes locally on the edge, the system achieves sub-20ms interaction latency with zero server bandwidth costs and absolute biometric privacy. It demonstrates how modern browser capabilities can bring practical ambient computing into everyday environments."
