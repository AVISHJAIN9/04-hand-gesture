# Project Map: Touchless Chef Gesture CV

## Folder Tree
```
39-hand-gesture-cv/
├── HandGestureCV-Clean-Project/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Gesture/
│   │   │   │   └── GestureCore.js       # Core landmark canvas binding
│   │   │   └── ChefVideoPlayer.jsx      # Video viewport, camera preview & gesture HUD
│   │   ├── hooks/
│   │   │   └── useGesture.js            # Custom React hook for gesture state
│   │   ├── services/
│   │   │   ├── GestureManager.js        # Singleton managing camera stream & recognizer
│   │   │   └── GestureService.js        # Alternate model initialization factory
│   │   ├── utils/
│   │   │   └── gestureMap.js            # Action mapping table (Palm -> Pause, Fist -> Play)
│   │   ├── App.jsx                      # App shell, video selector, and header HUD
│   │   ├── index.css                    # Tailwind utility injections
│   │   └── main.jsx                     # React 18 DOM mount point
│   ├── index.html                       # HTML5 entry with viewport meta
│   ├── package.json                     # MediaPipe tasks vision, React 18, Tailwind
│   └── vite.config.js                   # Vite bundling config
└── docs/                                # VitePress documentation portal
```

## Dependencies & Rationale
| Package | Version | Purpose |
|---|---|---|
| `@mediapipe/tasks-vision` | 0.10.14 | Google's cross-platform Wasm neural network suite for vision tasks |
| `react` | 18.3.1 | Declarative component UI library for reactive player states |
| `lucide-react` | 0.441.0 | Visual indicator iconography (Play, Pause, Hand, Camera, Sparkles) |
| `tailwindcss` | 3.4.15 | Responsive utility styling for kitchen-grade dark UI |
| `vite` | 5.4.11 | High-speed ESM development server and Rollup production bundler |
