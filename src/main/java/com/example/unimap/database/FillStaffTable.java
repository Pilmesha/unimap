package com.example.unimap.database;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FillStaffTable {

    private FillStaffTable() {
    }

    static void fill() {
        File staffRoomsFile = new File("staffRooms.txt");

        try (Scanner sc = new Scanner(staffRoomsFile)) {
            while (sc.hasNextLine()) {
                String[] fromFile = sc.nextLine().split(", ");
                GaniviDataApi.insertIntoStaffTable(fromFile[0], fromFile[1]);      // 0-staff,  1-room
            }
        } catch (FileNotFoundException e) {
        }
    }
}