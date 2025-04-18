#!/bin/bash

echo "Installing Python dependencies..."
pip install -r resources/requirements.txt

echo "Starting Spring Boot application..."
./mvnw spring-boot:run
