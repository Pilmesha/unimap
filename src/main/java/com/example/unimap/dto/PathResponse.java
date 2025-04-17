package com.example.unimap.dto;


public class PathResponse {
    private String path;
    private double cost;
    private boolean success;
    private String message;
    private boolean fromDatabase;


    // Constructors
    public PathResponse() {}
    public PathResponse(String path, double cost, boolean success, String message, boolean fromDatabase) {
        this.path = path;
        this.cost = cost;
        this.success = success;
        this.message = message;
        this.fromDatabase = fromDatabase;
    }

    // Getters and Setters
    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    public boolean isFromDatabase() {
        return fromDatabase;
    }
    
    public void setFromDatabase(boolean fromDatabase) {
        this.fromDatabase = fromDatabase;
    }
}
