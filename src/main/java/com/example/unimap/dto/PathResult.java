package com.example.unimap.dto;

public class PathResult {
    private String rawPath;
    private boolean fromDatabase;

    public PathResult(String rawPath, boolean fromDatabase) {
        this.rawPath = rawPath;
        this.fromDatabase = fromDatabase;
    }

    public String getRawPath() {
        return rawPath;
    }

    public boolean isFromDatabase() {
        return fromDatabase;
    }
}
