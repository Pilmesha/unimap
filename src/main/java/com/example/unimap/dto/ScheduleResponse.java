package com.example.unimap.dto;

public class ScheduleResponse {
    private String schedule;
    private boolean success;
    private String message;

    public ScheduleResponse() {}

    public ScheduleResponse(String schedule, boolean success, String message) {
        this.schedule = schedule;
        this.success = success;
        this.message = message;
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

