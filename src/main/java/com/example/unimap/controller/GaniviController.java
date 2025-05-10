package com.example.unimap.controller;

import com.example.unimap.dto.*;
import com.example.unimap.service.GaniviService;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
public class GaniviController {
    private final GaniviService ganiviService;

    public GaniviController() {
        this.ganiviService = new GaniviService();
    }

    // Endpoint to get the shortest path
    @PostMapping("/shortest-path")
    public ResponseEntity<PathResponse> getShortestPath(@RequestBody PathRequest request) {
        PathResult result = ganiviService.findShortestPath(request.getStart(), request.getEnd());
        String rawPath = result.getRawPath();

        String[] parts = rawPath.trim().split("-");
        double cost = Double.parseDouble(parts[parts.length - 1]);

        StringBuilder pathBuilder = new StringBuilder();
        for (int i = 0; i < parts.length - 1; i++) {
            pathBuilder.append(parts[i]);
            if (i < parts.length - 2) {
                pathBuilder.append(" -> ");
            }
        }

        String path = pathBuilder.toString();

        PathResponse response = new PathResponse(path, cost, true, "Path found successfully", result.isFromDatabase());
        return ResponseEntity.ok(response);
    }

    // Endpoint to get the staff room number by full name
    @GetMapping("/staff-room")
    public ResponseEntity<String> getStaffRoom(@RequestParam(name = "staffFullName") String fullName) {
        String room = ganiviService.findStaffRoom(fullName);
        return ResponseEntity.ok(room);
    }
    @PostMapping("/get_schedule")
    public ResponseEntity<ScheduleResponse> getSchedule(@RequestBody ScheduleRequest request) {
        String result = ganiviService.runPythonScript(request.getUsername(), request.getPassword());
        return ResponseEntity.ok(new ScheduleResponse(result, true, "Schedule fetched successfully"));

    }
}