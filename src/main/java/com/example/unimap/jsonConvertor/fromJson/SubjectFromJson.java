package com.example.unimap.jsonConvertor.fromJson;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;

@Getter
public class SubjectFromJson {
    @SerializedName("სასწავლო კურსი")
    private String subjectName;

    @SerializedName("ლექცია")
    private String lecture;

    @SerializedName("სამუშაო ჯგუფი")
    private String workerSquad;

    @SerializedName("ლაბორატორიული")
    private String lab;
}