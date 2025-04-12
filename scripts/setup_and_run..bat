@echo off
SET ENV_NAME=myenv
SET CONDA_PATH=%USERPROFILE%\anaconda3

REM
IF NOT EXIST "%CONDA_PATH%" (
    echo [ERROR] Anaconda not found at %CONDA_PATH%
    echo Please install Anaconda and try again.
    EXIT /B 1
)

CALL "%CONDA_PATH%\Scripts\activate.bat"

REM
CALL conda info --envs | findstr /C:"%ENV_NAME%" >nul
IF %ERRORLEVEL% NEQ 0 (
    echo [INFO] Conda env "%ENV_NAME%" not found. Creating it...
    CALL conda create -y -n %ENV_NAME% python=3.10
) ELSE (
    echo [INFO] Conda env "%ENV_NAME%" already exists.
)

REM 
CALL conda activate %ENV_NAME%

REM 
IF EXIST requirements.txt (
    echo [INFO] Installing Python dependencies...
    pip install -r requirements.txt
) ELSE (
    echo [WARNING] requirements.txt not found. Skipping package installation.
)
echo [DONE] Conda environment setup completed successfully.