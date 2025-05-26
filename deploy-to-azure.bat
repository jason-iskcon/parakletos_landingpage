@echo off
echo.
echo ========================================
echo   Parakletos Landing Page Deployment
echo ========================================
echo.

echo Files ready for deployment:
echo.
echo ✓ index.html (Original - Control)
echo ✓ variation-1-fomo.html (FOMO & Urgency)
echo ✓ variation-2-proof.html (Results & Social Proof)  
echo ✓ variation-3-ease.html (Ease & Quick Wins)
echo ✓ test-index.html (Navigation Hub)
echo ✓ styles.css (All styling)
echo ✓ script.js (Interactive features)
echo ✓ staticwebapp.config.json (Azure config)
echo.

echo Choose deployment method:
echo.
echo 1. Open Azure Portal (Manual upload)
echo 2. Open GitHub (For GitHub + Azure integration)
echo 3. View deployment guide
echo 4. Open local test page
echo.

set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" (
    echo Opening Azure Portal...
    start https://portal.azure.com/#create/Microsoft.StaticApp
)

if "%choice%"=="2" (
    echo Opening GitHub...
    start https://github.com/new
)

if "%choice%"=="3" (
    echo Opening deployment guide...
    start DEPLOYMENT.md
)

if "%choice%"=="4" (
    echo Opening local test page...
    start test-index.html
)

echo.
echo Next steps:
echo 1. Follow the DEPLOYMENT.md guide
echo 2. Upload all files to your chosen platform
echo 3. Configure A/B testing
echo 4. Set up analytics tracking
echo.
pause 