package com.example.unimap.service;

import com.example.unimap.entity.StaffRoom;
import com.example.unimap.exception.ResourceNotFoundException;
import com.example.unimap.repository.StaffRoomRepo;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.Optional;
import java.util.Scanner;

import static com.example.unimap.service.Translator.georgianToLatin;

@Service
public class StaffRoomService {
    private StaffRoomRepo staffRepo;

    private StaffRoomService(StaffRoomRepo staffRepo) {
        this.staffRepo = staffRepo;
        fillStaffRoomTable();
    }

    private String getStaffRoom(String staffFullName) {         // from Optional to String
        Optional<StaffRoom> staffRoom = staffRepo.findById(staffFullName);
        return staffRoom.isPresent() ? staffRoom.get().getStaffRoom() : null;
    }

    public String findStaffRoom(String staffFullName) {
        if (georgianToLatin.keySet().contains(staffFullName.charAt(0))) {
            staffFullName = Translator.translator(staffFullName);     // converts into latin
        }
        String staffRoom = getStaffRoom(staffFullName.toLowerCase());

        if (staffRoom == null) {
            throw new ResourceNotFoundException("No staff member found with name: " + staffFullName);
        }
        return staffRoom;
    }


    private void fillStaffRoomTable() {
        if (staffRepo.count() > 0) return;

        try (InputStream inputStream = getClass().getClassLoader().getResourceAsStream("staffRooms.txt")) {
            if (inputStream == null) {
                System.err.println("staffRooms.txt not found in resources.");
                return;
            }

            try (Scanner sc = new Scanner(inputStream)) {
                while (sc.hasNextLine()) {
                    String[] fromFile = sc.nextLine().split(", ");
                    staffRepo.save(new StaffRoom(fromFile[0], fromFile[1])); // 0-staff, 1-room
                }
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
