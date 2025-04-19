FROM eclipse-temurin:17-jdk

# Environment setup
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Install system dependencies for Python, Chrome, Selenium
RUN apt-get update && \
    apt-get install -y python3 python3-pip wget unzip gnupg curl && \
    # Install Chrome
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    apt install -y ./google-chrome-stable_current_amd64.deb && \
    rm google-chrome-stable_current_amd64.deb && \
    # Install ChromeDriver (fallback to fixed version if auto-match fails)
    CHROME_VERSION=$(google-chrome --version | grep -oP '\d+\.\d+\.\d+') && \
    wget -O /tmp/chromedriver.zip "https://chromedriver.storage.googleapis.com/${CHROME_VERSION}/chromedriver_linux64.zip" || \
    wget -O /tmp/chromedriver.zip "https://chromedriver.storage.googleapis.com/114.0.5735.90/chromedriver_linux64.zip" && \
    unzip /tmp/chromedriver.zip -d /usr/local/bin && \
    chmod +x /usr/local/bin/chromedriver && \
    rm /tmp/chromedriver.zip && \
    apt-get clean

# Set the working directory
WORKDIR /app

# Copy all project files
COPY . .

# Install Python dependencies
RUN pip3 install --no-cache-dir -r src/main/resources/requirements.txt

# Make Maven wrapper executable and build Spring Boot app
RUN chmod +x mvnw && ./mvnw clean install -DskipTests

# Expose Spring Boot's default port
EXPOSE 8080

# Start Spring Boot app
CMD ["./mvnw", "spring-boot:run"]
