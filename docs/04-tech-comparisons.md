# Tech Choice Comparisons

## 1. Computer Vision Runtime: Google MediaPipe Wasm vs TensorFlow.js vs Server-Side OpenCV
| Criteria | MediaPipe Wasm (Chosen) | TensorFlow.js | Server-Side OpenCV |
|---|---|---|---|
| Inference Latency | < 15ms (GPU delegate) | 30-60ms | 150-300ms (Network delay) |
| Privacy | 100% Local on Device | 100% Local on Device | Low (Streams sent to server)|
| Model Size | ~3.5MB quantized float16| 10-25MB | Zero client footprint |
| Server Cost | Zero ($0.00 infrastructure)| Zero | High GPU VM instances |

**Why Chosen**: MediaPipe Tasks Vision provides pre-trained, float16 quantized landmark models with native WebAssembly and WebGL bindings, delivering 30fps real-time inference with zero cloud compute costs.

## 2. Video Player Integration: Native HTML5 Video Element vs Video.js vs YouTube Embed API
| Criteria | Native HTML5 Video (Chosen) | Video.js | YouTube Iframe API |
|---|---|---|---|
| Latency | Instantaneous DOM access | Very fast | Interrupted by postMessage |
| Bundle Overhead | 0KB (Native browser API) | ~150KB | External iframe overhead |
| Direct Buffer Access | Full `video.currentTime` control | Full control | Limited by API restrictions |

**Why Chosen**: Direct DOM access allows sub-millisecond execution of play/pause commands without intermediate abstraction layers.
