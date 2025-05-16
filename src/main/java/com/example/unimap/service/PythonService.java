package com.example.unimap.service;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

import com.example.unimap.exception.*;


@Service
public class PythonService {

    private PythonService(){
    }

    // Method to execute the Python script and return its result
    public static String runPythonScript(String username, String password) {
        if (username.isEmpty() || password.isEmpty() || username.trim().isEmpty() || password.trim().isEmpty())
            throw new InvalidInputException("Credentials cannot be empty.");

        String scriptRunner = "src/main/resources/uni_scrape.py";
        String pythonPath = "python3";

        try {
            // Create the ProcessBuilder to call the Python script with credentials
            ProcessBuilder pb = new ProcessBuilder(pythonPath, scriptRunner, username, password);
            pb.redirectErrorStream(true);            // Merge stderr and stdout

            Process process = pb.start();

            // Read the script output (JSON)
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream(), "UTF-8"));
            String output = reader.lines().collect(Collectors.joining());

            // Wait for the process to finish and check the exit code
            int exitCode = process.waitFor();
            if (exitCode != 0) {
                throw new ExternalProcessException("Python script exited with code " + exitCode + ". Output: " + output);
            }
            return output;          // Return JSON string from Python script
        } catch (IOException | InterruptedException e) {
            Thread.currentThread().interrupt();     // best practice
            throw new ExternalProcessException("Failed to run Python script.");
        } catch (Exception e) {
            throw new ExternalProcessException("Login or password is invalid " + e.getMessage());
        }
    }

}
