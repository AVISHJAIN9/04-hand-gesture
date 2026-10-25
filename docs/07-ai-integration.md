# Edge AI & Neural Network Deep Dive

## Pre-Trained Architecture & Tensor Pipeline
1. **Model Architecture**:
   - Google MediaPipe's Gesture Recognizer is a multi-stage convolutional neural network.
   - Stage 1: Hand detector model identifying bounding boxes across incoming frames.
   - Stage 2: Hand landmark model extracting 21 three-dimensional (x, y, z) skeletal coordinates.
   - Stage 3: Gesture classification dense network categorizing landmark geometry into standard poses.
2. **Quantization & Performance**:
   - Model weights are quantized to float16 precision, reducing memory footprint to ~3.5MB while retaining >95% classification accuracy.
   - Operates in `VIDEO` running mode, utilizing temporal frame coherence to maintain continuous landmark tracking without running full object detection on every tick.
