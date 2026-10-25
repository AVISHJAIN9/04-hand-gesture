@echo off
echo ========================================================
echo Starting Touchless Chef (Hand Gesture Video Control)...
echo ========================================================

start "Touchless Chef (Port 5173)" cmd /k "npm run dev"

echo.
echo Application is running at: http://localhost:5173
echo.
pause
