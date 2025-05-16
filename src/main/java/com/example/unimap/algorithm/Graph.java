package com.example.unimap.algorithm;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

class Edge {
    private final String startVertex;
    private final String endVertex;
    private final double edgeWeight;

    Edge(String startVertex, String endVertex, double edgeWeight) {
        this.startVertex = startVertex;
        this.endVertex = endVertex;
        this.edgeWeight = edgeWeight;
    }

    public String getStartVertex() {
        return startVertex;
    }

    public String getEndVertex() {
        return endVertex;
    }

    public double getWeight() {
        return edgeWeight;
    }
}


public class Graph {
    private static ArrayList<Edge> edges = new ArrayList<>();
    private static Set<String> distinctVertexes = new HashSet<>();
    private static int graphSize = 0;
    private static Djikstra dj;

    static {
        addAllEdges();
        dj = new Djikstra(edges, graphSize);        // will be created only once
    }

    private Graph() {
    }

    private static void addEdge(String startVertex, String endVertex, double edgeWeight) {
        edges.add(new Edge(startVertex, endVertex, edgeWeight));
        edges.add(new Edge(endVertex, startVertex, edgeWeight));
        addDistinctVertex(startVertex);
        addDistinctVertex(endVertex);
    }

    private static void addDistinctVertex(String vertex) {
        if (!distinctVertexes.contains(vertex)) {
            distinctVertexes.add(vertex);
            graphSize++;
        }
    }

    public static String minPathBetweenPoints(String source, String finish) {
        return dj.minPathBetweenPoints(source, finish);
    }

    private static void addAllEdges() {
        File edgesFile = new File("src/main/resources/edges.txt");
        try (Scanner sc = new Scanner(edgesFile)) {
            while (sc.hasNextLine()) {
                String[] fromFile = sc.nextLine().split(", ");          // node1, node2 and length
                addEdge(fromFile[0], fromFile[1], Double.parseDouble(fromFile[2]));
            }
        } catch (FileNotFoundException e) {
        }
    }
}
