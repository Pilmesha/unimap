@echo off
SET ENV_NAME=myenv
SET CONDA_PATH=%USERPROFILE%\anaconda3

REM Activate Conda environment and run Python script with arguments
CALL "%CONDA_PATH%\Scripts\activate.bat" %ENV_NAME%
python src\main\resources\uni_scrape.py %1 %2
