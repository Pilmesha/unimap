package com.example.unimap.service;

import com.example.unimap.algorithm.Graph;
import com.example.unimap.database.GaniviDataApi;
import com.example.unimap.dto.PathResult;

import org.springframework.stereotype.Service;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

@Service
public class GaniviService {
    public PathResult findShortestPath(String start, String end) {
        String minimalPath;
        minimalPath = GaniviDataApi.selectPathsTable(start + "-" + end);
        if (minimalPath != null) {
            return new PathResult(minimalPath, true);
        }

        minimalPath = GaniviDataApi.selectPathsTable(end + "-" + start);
        if (minimalPath != null) {
            return new PathResult(GaniviDataApi.pathReverser(minimalPath), true);
        }

        minimalPath = Graph.minPathBetweenPoints(start, end);
        GaniviDataApi.insertIntoPathsTable(start + "-" + end, minimalPath);

        return new PathResult(minimalPath, false);
    }

    public String findStaffRoom(String fullName) {
        try{return GaniviDataApi.selectStaffTable(fullName);}
        catch (Exception e){return "Error: Could not find staff room. " + e.getMessage();}
    }
    // Method to execute the Python script and return its result
    public String runPythonScript(String username, String password) {
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
                throw new RuntimeException("Python script exited with code: " + exitCode);
            }

            return output;  // Return JSON string from Python script
        } catch (Exception e) {
            e.printStackTrace();
            return "{\"error\": \"Failed to run Python script\"}";
        }
    }
}
