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

# Install Google Chrome
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && \
    apt-get install -y google-chrome-stable && \
    apt-get clean

# Get Chrome version and install matching ChromeDriver
RUN CHROME_VERSION=$(google-chrome --version | grep -oP '\d+\.\d+\.\d+') && \
    wget -O /tmp/chromedriver.zip "https://chromedriver.storage.googleapis.com/${CHROME_VERSION}/chromedriver_linux64.zip" || \
    wget -O /tmp/chromedriver.zip "https://chromedriver.storage.googleapis.com/114.0.5735.90/chromedriver_linux64.zip" && \
    unzip /tmp/chromedriver.zip -d /usr/local/bin && \
    chmod +x /usr/local/bin/chromedriver && \
    rm /tmp/chromedriver.zip

# Copy and install Python dependencies
COPY src/main/resources/requirements.txt .
RUN pip install -r requirements.txt

# Copy project files
COPY target/unimap-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 8080

# Start Spring Boot app
CMD ["java", "-jar", "app.jar"]
