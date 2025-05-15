package com.example.unimap.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Component;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Component
@Entity
public class StaffRoom {
    @Id
    private String staffFullName;

    @Column(nullable = false)
    private String staffRoom;
}
