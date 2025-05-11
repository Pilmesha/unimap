package com.example.unimap.database;

import java.sql.*;

import org.springframework.stereotype.Component;

@Component
public class GaniviDataApi {
    private static final String url = "jdbc:sqlite:ganivi.db";

    private GaniviDataApi() {
    }

    static {
        createPathsTable();
        createStaffTable();
        FillStaffTable.fill();
    }

    // create and delete --------------------------------------------------------------------------
    private static void createPathsTable() {
        // SQL statement for creating a Paths table
        String createStatement = "create table if not exists MinimalPaths "
                + "("
                + "Route text,"
                + "MinimalPath text"
                + ")";

        executeStatement(createStatement);
    }


    private static void createStaffTable() {
        // SQL statement for creating a Staff table
        String createStatement = "create table if not exists StaffRooms "
                + "("
                + "StuffFullName text,"
                + "RoomNumber text"
                + ")";

        executeStatement(createStatement);
    }
    // -------------------------------------------------------------------------------------------


    // insert ------------------------------------------------------------------------------------
    public static void insertIntoPathsTable(String route, String minimalPath) {
        // SQL statement for inserting into Paths table
        String insertStatement = "insert into MinimalPaths"
                + "(Route, MinimalPath)"
                + "values"
                + "('" + route + "', '" + minimalPath + "')";

        executeStatement(insertStatement);
    }

    static void insertIntoStaffTable(String staffFullName, String roomNumber) {
        // SQL statement for inserting into Staff table
        String insertStatement = "insert into StaffRooms"
                + "(StuffFullName, RoomNumber)"
                + "values"
                + "('" + staffFullName + "', '" + roomNumber + "')";

        executeStatement(insertStatement);
    }

    private static void executeStatement(String statement) {
        try (Connection conn = DriverManager.getConnection(url)) {
            Statement st = conn.createStatement();
            st.execute(statement);
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        }
    }
    // --------------------------------------------------------------------------------------------


    // select ------------------------------------------------------------------------------------
    public static String selectPathsTable(String route) {
        // SQL statement for selecting MinimalPath based on route
        String selectStatement =
                "select MinimalPath from MinimalPaths where Route = '" + route + "'";

        return executeSelectStatement(selectStatement);
    }

    public static String selectStaffTable(String staffFullName) {
        // SQL statement for selecting RoomNumber based on staff's fullname
        String selectStatement =
                "select RoomNumber from StaffRooms where StuffFullName = '" + staffFullName + "'";

        return executeSelectStatement(selectStatement);
    }

    private static String executeSelectStatement(String statement) {
        try (Connection conn = DriverManager.getConnection(url)) {
            Statement st = conn.createStatement();

            ResultSet rs = st.executeQuery(statement);
            return rs == null ? null : rs.getString(1);
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        }

        return null;
    }
}
