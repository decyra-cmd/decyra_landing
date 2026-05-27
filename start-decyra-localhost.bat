@echo off
cd /d "C:\Users\jguerrap\Downloads\StartupIE\decyra_landing"
start "Decyra Localhost" cmd /k "npm run dev -- --host 127.0.0.1 --port 4174"