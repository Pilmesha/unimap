package com.example.unimap.dto;

import lombok.Getter;

@Getter
public class PathRequest {
    private String start;
    private String end;

    private void setStart(String start) {
        this.start = start;
        if (start == null || start.trim().isEmpty()) {
            this.start = "entrance";
        }
    }
}

