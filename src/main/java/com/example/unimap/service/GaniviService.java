package com.example.unimap.service;

import com.example.unimap.algorithm.Graph;
import com.example.unimap.database.GaniviDataApi;
import com.example.unimap.dto.PathResult;
import static com.example.unimap.service.Translator.*;          // imports static members of class
import org.springframework.stereotype.Service;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;

import com.example.unimap.exception.*;


@Service
public class GaniviService {
    public PathResult findShortestPath(String start, String end) {
        if (start == null || end == null || start.trim().isEmpty() || end.trim().isEmpty()) throw new InvalidInputException("Start or end room cannot be empty.");
        String minimalPath;
        minimalPath = GaniviDataApi.selectPathsTable(start + "-" + end);
        if (minimalPath != null) {
            return new PathResult(minimalPath, true);
        }

        minimalPath = GaniviDataApi.selectPathsTable(end + "-" + start);
        if (minimalPath != null) {
            return new PathResult(pathReverser(minimalPath), true);
        }
        minimalPath = Graph.minPathBetweenPoints(start, end);
        if (minimalPath != null) {               // if rooms were valid
            GaniviDataApi.insertIntoPathsTable(start + "-" + end, minimalPath);
        } else throw new ResourceNotFoundException("One of the rooms doesn't exist.");
        return new PathResult(minimalPath, false);
    }


    public String findStaffRoom(String staffFullName) {
        if (!staffFullName.matches(".*[a-zA-Zა-ჰ].*")) {
            throw new InvalidInputException("Name must contain letters, not just numbers.");
        }
        if (georgianToLatin.keySet().contains(staffFullName.charAt(0))) {
            staffFullName = Translator.translator(staffFullName);     // converts into latin
        }
        String staffRoom = GaniviDataApi.selectStaffTable(staffFullName.toLowerCase());
        
        if (staffRoom == null){
            throw new ResourceNotFoundException("No staff member found with name: " + staffFullName);
        }
        return staffRoom;    
    }


    // Method to execute the Python script and return its result
    public String runPythonScript(String username, String password) {
        if (username.isEmpty() || password.isEmpty()|| username.trim().isEmpty() || password.trim().isEmpty()) 
            throw new InvalidInputException("Credentials cannot be empty.");
        try {
            // Create the ProcessBuilder to call the Python script with credentials
            String scriptRunner = "/app/uni_scrape.py";
            String pythonPath = "python3";
            ProcessBuilder pb = new ProcessBuilder(pythonPath, scriptRunner ,username, password);
            pb.redirectErrorStream(true); // Merge stderr and stdout

            Process process = pb.start();

            // Read the script output (JSON)
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream(), "UTF-8"));
            String output = reader.lines().collect(Collectors.joining());

            // Wait for the process to finish and check the exit code
            int exitCode = process.waitFor();
            if (exitCode != 0) {
                throw new ExternalProcessException("Python script exited with code " + exitCode + ". Output: " + output);
            }
            return output;  // Return JSON string from Python script
        } catch (IOException | InterruptedException e) {
            Thread.currentThread().interrupt();  // best practice
            throw new ExternalProcessException("Failed to run Python script.");
        } catch (Exception e) {
            throw new ExternalProcessException("Login or password is invalid " + e.getMessage());
        }
    }

    private static String pathReverser(String path) {
        String[] points = path.split("-");
        ArrayList<String> listPoints = new ArrayList<>(Arrays.asList(points));
        String lastElement = listPoints.remove(listPoints.size() - 1);
        Collections.reverse(listPoints);
        listPoints.add(lastElement);
        return String.join("-", listPoints);
    }
}
