package com.example.unimap.jsonConvertor.fromJson;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;

public class SubjectsFromJson {
    @SerializedName("data")
    private ArrayList<SubjectFromJson> subjects;

    public ArrayList<SubjectFromJson> getSubjects() {
        return subjects;
    }
}
