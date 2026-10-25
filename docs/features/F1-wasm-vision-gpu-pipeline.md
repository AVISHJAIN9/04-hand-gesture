# F1: Client-Side WebAssembly Vision Pipeline & GPU Delegate

## 1. Description & Architecture
`src/services/GestureManager.js` initializes Google's MediaPipe Tasks Vision runtime. It pulls the WebAssembly bundle via `FilesetResolver` and loads the float16 quantized gesture recognition model, configuring it with `delegate: "GPU"` to leverage browser WebGL acceleration.

## 2. Model Initialization Flow
```mermaid
sequenceDiagram
    participant App as React App
    participant Manager as GestureManager.js
    participant Wasm as MediaPipe FilesetResolver
    participant GPU as WebGL GPU Context

    App->>Manager: initialize()
    Manager->>Wasm: Load WASM vision runtime binaries
    Wasm-->>Manager: Vision Runtime Initialized
    Manager->>GPU: GestureRecognizer.createFromOptions({ delegate: "GPU", float16 })
    GPU-->>Manager: Hardware-Accelerated Model Ready
    Manager-->>App: Ready for Optical Streaming
```

## 3. Say It Out Loud
"I architected the computer vision engine to execute entirely within the client's browser using WebAssembly and WebGL GPU acceleration. By calling MediaPipe's FilesetResolver, the app loads a float16 quantized neural network model into browser memory. Setting the execution delegate to GPU offloads matrix multiplications from the main JavaScript thread to the user's graphics card, maintaining a fluid 30-to-60 frames per second without causing the video player to stutter."
