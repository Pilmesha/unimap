package com.example.unimap.controller;

import com.example.unimap.dto.*;
import com.example.unimap.service.MinimalPathService;
import com.example.unimap.service.PythonService;
import com.example.unimap.service.StaffRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/")
public class GaniviController {
    private final MinimalPathService minPathService;
    private final StaffRoomService staffService;

    @Autowired
    private GaniviController(MinimalPathService minPathService, StaffRoomService staffService) {
        this.minPathService = minPathService;
        this.staffService = staffService;
    }

    // Endpoint to get the shortest path
    @PostMapping("/shortest-path")
    public ResponseEntity<PathResponse> getShortestPath(@RequestBody PathRequest pathReq) {
        String minPath = minPathService.findShortestPath(pathReq.getStart(), pathReq.getEnd());
        PathResponse response = minPathService.makePathResponse(minPath);
        return ResponseEntity.ok(response);
    }

    // Endpoint to get the staff room number by full name
    @GetMapping("/staff-room")
    public ResponseEntity<String> getStaffRoom(@RequestParam String staffFullName) {
        String room = staffService.findStaffRoom(staffFullName);
        return ResponseEntity.ok(room);
    }

    @GetMapping("/get_schedule")
    public ResponseEntity<String> getSchedule(@RequestParam String userName, @RequestParam String password) {
        String result = PythonService.runPythonScript(userName, password);
        return ResponseEntity.ok(result);
    }
}