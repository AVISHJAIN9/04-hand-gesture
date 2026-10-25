# F4: Privacy-First Zero-Server Camera Architecture & Live HUD

## 1. Description & Security Model
Because the webcam is active in private domestic spaces (kitchens, bedrooms), privacy is paramount. Optical frames are buffered into an offscreen HTML video element and processed strictly in browser volatile RAM. No image data is ever serialized, persisted, or transmitted across the network.

## 2. Privacy Boundary
```mermaid
flowchart TD
    subgraph ClientDevice [User Device Boundary - Safe]
        Cam[Webcam Hardware] --> OffscreenVideo[Offscreen Video Buffer]
        OffscreenVideo --> WasmInference[Local MediaPipe WASM]
        WasmInference --> VideoState[Local HTML5 Video Player]
    end

    subgraph ExternalWorld [Internet / Cloud - Zero Exposure]
        CloudServer[No Cloud Video Ingestion]
    end

    ClientDevice -.-x|No Network Packets Sent| ExternalWorld
```

## 3. Say It Out Loud
"Privacy was the primary architectural consideration for this project. Asking users to turn on a webcam in their home kitchen requires absolute trust. By running the machine learning model entirely in client-side WebAssembly, camera frames never leave the device's volatile memory. The browser does not send a single pixel over the network, completely eliminating the risk of data leaks or server-side interception. Users can even inspect the network tab in DevTools to verify that zero video payloads are transmitted."
