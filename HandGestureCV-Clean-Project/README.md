# Touchless Chef - Hand Gesture Controlled Video Player

An AI-powered computer vision web application designed for chefs and culinary workshops to control recipe video playback completely touch-free using real-time hand gesture recognition via Google MediaPipe Vision Tasks.

---

## ✋ Supported Hand Gestures

| Gesture | Action | Description |
| :--- | :--- | :--- |
| ✋ **Open Palm** | **Play / Pause** | Toggles video playback without touching the screen |
| ☝️ **Pointing Up** | **Jump Forward** | Skips forward by 10 seconds |
| ✌️ **Victory / Peace** | **Jump Backward** | Rewinds by 10 seconds |
| 👍 **Thumb Up** | **Zoom In** | Scales video to 125% for closer inspection of cooking techniques |
| 👎 **Thumb Down** | **Reset Zoom** | Resets video scale back to 100% |

---

## 📁 Repository Structure

```
39-hand-gesture-cv/
├── src/
│   ├── components/
│   │   ├── ChefVideoPlayer.jsx    # Core Video Player with Gesture Overlay & Camera Feed
│   │   └── Gesture/
│   │       └── GestureCore.js     # Component Re-Export Wrapper
│   ├── hooks/
│   │   └── useGesture.js          # Gesture Detection Hook
│   ├── services/
│   │   ├── GestureManager.js      # MediaPipe Model Initializer & Camera Stream Manager
│   │   └── GestureService.js      # MediaPipe Tasks-Vision Service
│   ├── utils/
│   │   └── gestureMap.js          # Gesture Command Mapping Constant
│   ├── App.jsx                    # Main Application UI with Recipe Chooser & Guide
│   ├── index.css                  # Tailwind CSS Directives
│   └── main.jsx                   # React 18 Application Root
├── index.html                     # HTML Entry Point
├── package.json                   # Project Dependencies & Scripts
├── vite.config.js                 # Vite Bundler Configuration (Port 5173)
├── tailwind.config.js             # Tailwind Configuration
├── postcss.config.js              # PostCSS Configuration
├── install.bat                    # One-Click Dependency Installer
├── start.bat                      # One-Click Development Server Launcher
├── .gitignore                     # Git Ignore File
└── README.md
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js**: v18+ or v20+
- **Webcam**: Standard built-in or USB camera (for MediaPipe vision tracking)

### 2. Install Dependencies
Double-click `install.bat` or run in terminal:
```bash
npm install --legacy-peer-deps
```

### 3. Run Development Server
Double-click `start.bat` or run in terminal:
```bash
npm run dev
```
Open **http://localhost:5173** in your web browser and allow camera permissions when prompted.

---

## 🛠️ Cleanups & Fixes Applied
1. **Created Missing Project Scaffold**: The original repository export was missing `package.json`, `index.html`, `main.jsx`, `App.jsx`, `vite.config.js`, and CSS stylesheets. Fully built the modern Vite + React + Tailwind framework around the gesture services.
2. **Fixed Invalid JSX in `.js` File**: Resolved Vite build failure caused by JSX syntax inside `ChefVideoPlayer.js` by renaming to `ChefVideoPlayer.jsx` and re-exporting.
3. **Removed Stale Junk**: Deleted macOS `.DS_Store` files and initialized clean `.gitignore`.
4. **Enhanced User Feedback**: Added visual gesture tags, active status indicators, and an optional camera preview inset for visual debugging.
5. **Provided One-Click Automation**: Added `install.bat` and `start.bat` scripts.

---

## License & Attribution
- Original Repository Origin: `https://github.com/AVISHJAIN9/04-hand-gesture`
- Licensed under the **ISC License**.
