package com.example.unimap.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Component;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Component
@Entity
public class MinimalPath {
    @Id
    private String points;

    @Lob
    @Column(nullable = false)
    private String pathBetween;
}
