package com.example.unimap.jsonConvertor;

import com.example.unimap.jsonConvertor.fromJson.SubjectsFromJson;
import com.example.unimap.jsonConvertor.toJson.ClearSubjectsCreator;
import com.example.unimap.jsonConvertor.toJson.Subjects;
import com.google.gson.Gson;

public class Convertor {
    private static Gson gson = new Gson();

    public static String newSchedule(String oldSchedule) {
        SubjectsFromJson subsFromJson = gson.fromJson(oldSchedule, SubjectsFromJson.class);
        Subjects subjects = ClearSubjectsCreator.create(subsFromJson);
        return gson.toJson(subjects);
    }
}
