package com.example.unimap.controller;

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
    @GetMapping("/shortest-path")
    public ResponseEntity<String> getShortestPath(@RequestParam String start, @RequestParam String end) {
        String path = ganiviService.findShortestPath(start, end);
        return ResponseEntity.ok(path);
    }

    // Endpoint to get the staff room number by full name
    @GetMapping("/staff-room")
    public ResponseEntity<String> getStaffRoom(@RequestParam String fullName) {
        String room = ganiviService.findStaffRoom(fullName);
        return room != null ? ResponseEntity.ok(room) : ResponseEntity.notFound().build();
    }
    @GetMapping("/get_schedule")
    public String getSchedule(@RequestParam String username, @RequestParam String password) {
        return ganiviService.runPythonScript(username, password);
    }
}