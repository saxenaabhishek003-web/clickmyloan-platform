@echo off
echo =============================================================
echo   CLICKMYLOAN - MODERN DIGITAL LENDING PLATFORM
echo   Finance Your Next Move With ClickMyLoan
echo =============================================================
echo.

:: Check if Node is available
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Building latest static pages...
    node build.js
    echo Starting local web server at http://localhost:3000 ...
    start http://localhost:3000
    node server.js
    goto end
)

:: Fallback: Open index.html directly in default browser
echo Opening ClickMyLoan directly in default web browser...
start index.html

:end
