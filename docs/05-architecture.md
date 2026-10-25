# System Architecture & Edge Optimization

## Architecture Diagram
```mermaid
flowchart TD
    User([Cook / User]) --> WebApp[React 18 Single Page App]
    
    subgraph BrowserRuntime [Browser Sandbox]
        WebApp --> DOMVideo[HTML5 Video Player Element]
        WebApp --> OffscreenCam[Hidden Camera Stream Buffer 640x480]
        OffscreenCam --> RAF[requestAnimationFrame Loop 30-60fps]
        RAF --> WasmEngine[MediaPipe Tasks Vision Wasm]
        WasmEngine --> WebGL[WebGL GPU Acceleration]
        WasmEngine --> Classification[Gesture Category + Score]
        Classification --> Heuristics[1500ms Debounce Heuristic Filter]
        Heuristics --> DOMVideo
    end

    subgraph CDNLayer [Static Assets Edge CDN]
        CDNLayer -->|WASM Binaries| WasmEngine
        CDNLayer -->|float16 Model Task| WasmEngine
    end
```

## Scaling to 100x Traffic: The First Three Bottlenecks
1. **Model & Wasm Asset Bandwidth on Initial Load**: 100,000 concurrent users downloading the 3.5MB model simultaneously will spike CDN egress. *Mitigation*: Cache the model task and Wasm binaries using Service Workers and the Cache API for instant offline loads.
2. **GPU Thermal Throttling on Mobile Devices**: Continuous 60fps gesture inference can drain mobile batteries and trigger thermal throttling. *Mitigation*: Dynamically drop prediction frame rates to 15fps when no hands are in the camera's bounding box.
3. **Low-Light Optical Noise in Kitchens**: Poor lighting causes landmark tracking jitter. *Mitigation*: Add software-based histogram equalization via a hidden `<canvas>` context before passing frames to the neural network.
