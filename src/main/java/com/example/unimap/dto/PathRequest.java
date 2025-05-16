package com.example.unimap.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class PathRequest {
    private String start;
    private String end;
}

