# --- Stage 1: Build Java Spring Boot .jar ---
FROM maven:3.9.4-eclipse-temurin-17 AS builder

WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests


# --- Stage 2: Runtime with Java, Python, Selenium ---
# Use OpenJDK 17 base image
FROM openjdk:17-slim

# Set workdir
WORKDIR /app

# Install dependencies
RUN apt-get update && \
    apt-get install -y wget curl unzip gnupg python3 python3-pip python3-venv fonts-liberation && \
    apt-get clean

# Set up Python venv
RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"
RUN pip install --upgrade pip


# Install matching ChromeDriver version 114.0.5735.90
RUN wget https://mirror.cs.uchicago.edu/google-chrome/pool/main/g/google-chrome-stable/google-chrome-stable_114.0.5735.90-1_amd64.deb && \
    apt-get install -y ./google-chrome-stable_114.0.5735.90-1_amd64.deb && \
    rm google-chrome-stable_114.0.5735.90-1_amd64.deb


#Install ChromeDriver for version 114 (or any specific version you want)
RUN wget -O /tmp/chromedriver.zip "https://chromedriver.storage.googleapis.com/114.0.5735.90/chromedriver_linux64.zip" && \
    unzip /tmp/chromedriver.zip -d /usr/local/bin && \
    chmod +x /usr/local/bin/chromedriver && \
    rm /tmp/chromedriver.zip


# Copy and install Python dependencies
COPY src/main/resources/requirements.txt /app/requirements.txt
RUN pip install -r /app/requirements.txt

# Copy project files
COPY . .
COPY src/main/resources/uni_scrape.py /app/uni_scrape.py


# Copy the built jar from builder stage
COPY --from=builder /app/target/unimap-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 8080

# Start Spring Boot app
CMD ["java", "-jar", "app.jar"]