@echo off
chcp 65001
setlocal

set FILE_URL=https://raw.githubusercontent.com/Ra7x/h2m-ServerList/master/favourites.json
set TARGET_DIR=%~dp0players2
set TARGET_FILE=%TARGET_DIR%\favourites.json

if not exist "%TARGET_DIR%" (
    mkdir "%TARGET_DIR%"
)

echo Downloading favourites.json from GitHub...
curl -o "%TARGET_FILE%" "%FILE_URL%"

if exist "%TARGET_FILE%" (
    echo Download completed successfully.
    echo Server list updated!
) else (
    echo Error downloading favourites.json. Check the URL and your internet connection.
    pause
    exit /b
)

if exist "h2m-mod.exe" (
    echo Starting the mod...
    start "" "h2m-mod.exe"
) else (
    echo h2m-mod.exe not found. Make sure the file is in the correct folder.
    pause
    exit /b
)

echo Press any key to exit...
pause

endlocal
