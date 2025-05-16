package com.example.unimap.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class PathResponse {
    private String path;
    private int cost;
    private String message;
}
