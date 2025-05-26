Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Parakletos Landing Page Deployment" -ForegroundColor Cyan  
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Files ready for deployment:" -ForegroundColor Green
Write-Host ""
Write-Host "✓ index.html (Original - Control)" -ForegroundColor White
Write-Host "✓ variation-1-fomo.html (FOMO and Urgency)" -ForegroundColor White
Write-Host "✓ variation-2-proof.html (Results and Social Proof)" -ForegroundColor White
Write-Host "✓ variation-3-ease.html (Ease and Quick Wins)" -ForegroundColor White
Write-Host "✓ test-index.html (Navigation Hub)" -ForegroundColor White
Write-Host "✓ styles.css (All styling)" -ForegroundColor White
Write-Host "✓ script.js (Interactive features)" -ForegroundColor White
Write-Host "✓ staticwebapp.config.json (Azure config)" -ForegroundColor White
Write-Host ""

Write-Host "Choose deployment method:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Open Azure Portal (Manual upload)" -ForegroundColor White
Write-Host "2. Open GitHub (For GitHub + Azure integration)" -ForegroundColor White
Write-Host "3. View deployment guide" -ForegroundColor White
Write-Host "4. Open local test page" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (1-4)"

switch ($choice) {
    "1" {
        Write-Host "Opening Azure Portal..." -ForegroundColor Green
        Start-Process "https://portal.azure.com/#create/Microsoft.StaticApp"
    }
    "2" {
        Write-Host "Opening GitHub..." -ForegroundColor Green
        Start-Process "https://github.com/new"
    }
    "3" {
        Write-Host "Opening deployment guide..." -ForegroundColor Green
        Start-Process "DEPLOYMENT.md"
    }
    "4" {
        Write-Host "Opening local test page..." -ForegroundColor Green
        Start-Process "test-index.html"
    }
    default {
        Write-Host "Invalid choice. Please run the script again." -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Follow the DEPLOYMENT.md guide" -ForegroundColor White
Write-Host "2. Upload all files to your chosen platform" -ForegroundColor White
Write-Host "3. Configure A/B testing" -ForegroundColor White
Write-Host "4. Set up analytics tracking" -ForegroundColor White
Write-Host ""

Write-Host "🚀 Your landing pages are ready for Azure deployment!" -ForegroundColor Green
Write-Host ""
Read-Host "Press Enter to continue" 