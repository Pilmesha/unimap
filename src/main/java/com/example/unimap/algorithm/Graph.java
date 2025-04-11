package com.example.unimap.algorithm;

import java.util.ArrayList;
import java.util.HashSet;
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

    public String getStartVertex(){
        return startVertex;
    }

    public String getEndVertex(){
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
        // 010
        addEdge("010", "s0d2", 1.70);
        addEdge("s0d2", "s0d1", 2.13);

        // ასები
        addEdge("100", "101", 10.21);       // მუზეუმთან
        addEdge("101", "102", 14.84);
        addEdge("102", "103", 7.72);
        addEdge("103", "104", 5.34);
        addEdge("104", "105", 14.60);
        addEdge("105", "106", 5.94);
        addEdge("106", "107", 7.72);
        addEdge("107", "cameras", 5.11);
        addEdge("cameras", "108", 3.92);
        addEdge("108", "109", 13.3);
        addEdge("109", "s1b2", 24.1);
        addEdge("s1b2", "s1b1", 2.37);

        // ორასები
        addEdge("200", "201", 2.78);
        addEdge("201", "202", 3.42);
        addEdge("202", "203", 3.2);
        addEdge("203", "204", 3.49);
        addEdge("204", "205", 3.06);
        addEdge("205", "206", 3.56);
        addEdge("206", "207", 3.2);
        addEdge("207", "208", 1.49);
        addEdge("208", "209", 5.05);
        addEdge("209", "210", 6.55);
        addEdge("210", "211", 10.04);
        addEdge("211", "212", 3.2);
        addEdge("212", "213", 11.53);
        addEdge("213", "214", 5.05);
        addEdge("214", "215", 9.68);
        addEdge("213", "216", 5.34);        // კიბისკენ ჩამოსახვევი
        addEdge("216", "s2b2", 2.35);
        addEdge("s2b2", "s2b1", 1.78);

        // სამასები
        // ზედა დერეფანი
        addEdge("300", "301", 6.33);
        addEdge("301", "302", 6.58);
        addEdge("302", "303", 6.58);
        addEdge("303", "304", 4.81);
        addEdge("304", "305", 1.86);
        addEdge("305", "306", 3.04);
        addEdge("306", "307", 3.46);
        addEdge("307", "308", 3.21);
        addEdge("308", "309", 3.38);
        addEdge("309", "310", 6.58);
        addEdge("310", "311", 3.21);
        addEdge("311", "312", 11.56);
        addEdge("312", "313", 5.06);
        addEdge("313", "314", 3.04);
        addEdge("314", "315", 3.46);
        addEdge("315", "316", 3.12);
        addEdge("316", "317", 3.46);
        addEdge("317", "318", 3.21);
        addEdge("318", "319", 3.38);
        addEdge("319", "320", 3.12);
        addEdge("320", "321", 3.38);
        addEdge("321", "322", 6.75);
        addEdge("322", "323", 6.5);
        addEdge("323", "324", 3.21);
        addEdge("324", "325", 6.67);
        addEdge("325", "326", 3.38);
        addEdge("326", "327", 8.27);
        // მარცხენა დერეფანი
        addEdge("312", "328", 5.23);
        addEdge("328", "s3b2", 2.53);
        addEdge("s3b2", "s3b1", 1.69);
        addEdge("328", "329", 4.22);
        addEdge("329", "330", 6.58);
        addEdge("330", "331", 6.58);
        addEdge("331", "332", 9.79);
        addEdge("332", "333", 4.83);
        addEdge("333", "s3a2", 2);
        addEdge("s3a2", "s3a1", 1.9);
        // მარჯვენა დერეფანი
        addEdge("327", "334", 4.56);
        addEdge("334", "s3c2", 2.19);
        addEdge("s3c2", "s3c1", 2.03);
        addEdge("334", "335", 7.77);
        addEdge("335", "336", 6.67);
        addEdge("336", "337", 6.58);
        addEdge("337", "338", 6.67);
        addEdge("338", "339", 5);
        addEdge("339", "s3d2", 2.1);
        addEdge("s3d2", "s3d1", 2.2);
        // ქვედა დერეფანი
        addEdge("340", "341", 10);
        addEdge("341", "342", 3.2);
        addEdge("342", "343", 24.46);
        addEdge("343", "344", 3.44);
        addEdge("344", "333", 1.56);
        addEdge("344", "center", 36.34);
        addEdge("center", "entrance", 9.53);
        addEdge("center", "345", 30.09);
        addEdge("345", "339", 1.56);
        addEdge("345", "346", 3.13);
        addEdge("346", "347", 18.29);
        addEdge("347", "348", 6.41);

        // ოთხასები
        // ზედა დერეფანი
        addEdge("400", "401", 3.79);
        addEdge("401", "402", 2.73);
        addEdge("402", "403", 3.79);
        addEdge("403", "404", 2.73);
        addEdge("404", "405", 3.55);
        addEdge("405", "406", 3.2);
        addEdge("406", "407", 3.79);
        addEdge("407", "408", 1.18);
        addEdge("408", "409", 4.86);
        addEdge("409", "410", 6.64);
        addEdge("410", "411", 9.95);
        addEdge("411", "412", 3.32);
        addEdge("412", "413", 11.38);           // 413 კიბესთან უხვევს
        addEdge("413", "414", 4.98);
        addEdge("414", "415", 3.08);
        addEdge("415", "416", 3.2);
        addEdge("416", "417", 3.32);
        addEdge("417", "418", 3.55);
        addEdge("418", "419", 3.32);
        addEdge("419", "420", 3.2);
        addEdge("420", "421", 2.96);
        addEdge("421", "422", 3.67);
        addEdge("422", "423", 3.2);
        addEdge("423", "424", 2.13);
        addEdge("424", "425", 1.42);
        addEdge("425", "426", 3.08);
        addEdge("426", "427", 3.67);
        addEdge("427", "428", 3.8);
        addEdge("428", "429", 3.55);
        addEdge("429", "430", 6.99);
        addEdge("430", "431", 7.94);
        // მარცხენა დერეფანი
        addEdge("413", "432", 5.33);
        addEdge("432", "s4b2", 2.13);
        addEdge("s4b2", "s4b1", 1.78);
        addEdge("432", "433", 4.38);
        addEdge("433", "434", 6.52);
        addEdge("434", "435", 3.2);
        addEdge("435", "436", 3.44);
        addEdge("436", "437", 3.08);
        addEdge("437", "438", 6.75);
        addEdge("438", "439", 4.7);
        addEdge("439", "s4a2", 2);
        addEdge("s4a2", "s4a1", 2);
        // მარჯვენა დერეფანი
        addEdge("431", "440", 4.38);
        addEdge("440", "s4c2", 2.37);
        addEdge("s4c2", "s4c1", 1.78);
        addEdge("440", "441", 11.49);
        addEdge("441", "442", 18.2);
        addEdge("442", "s4d2", 1.3);
        addEdge("s4d2", "s4d1", 1.7);
        // ქვედა დერეფანი
        addEdge("443", "444", 10.13);
        addEdge("444", "445", 6.52);
        addEdge("445", "446", 3.08);
        addEdge("446", "447", 3.45);
        addEdge("447", "448", 3.45);
        addEdge("448", "449", 11.25);
        addEdge("449", "439", 4.8);
        addEdge("449", "450", 5.25);
        addEdge("450", "451", 3.225);
        addEdge("451", "452", 3.45);
        addEdge("452", "453", 3.15);
        addEdge("453", "454", 3.38);
        addEdge("454", "455", 3.3);
        addEdge("455", "456", 3.45);
        addEdge("456", "457", 3.22);
        addEdge("457", "458", 3.45);
        addEdge("458", "459", 3.23);
        addEdge("459", "460", 6.52);
        addEdge("460", "461", 3.3);
        addEdge("461", "461", 3.3);
        addEdge("462", "463", 3.38);
        addEdge("463", "464", 3.15);
        addEdge("464", "465", 3.53);
        addEdge("465", "466", 3.22);
        addEdge("466", "467", 6.07);
        addEdge("467", "442", 4.73);
        addEdge("467", "468", 10.65);
        addEdge("468", "469", 3.38);
        addEdge("469", "470", 3.15);
        addEdge("470", "471", 3.15);
        addEdge("471", "472", 6.67);
        addEdge("472", "473", 3.53);
        addEdge("473", "474", 3.08);
        addEdge("474", "475", 3.45);
        addEdge("475", "476", 3.22);
        addEdge("476", "477", 6.6);
        addEdge("477", "478", 3.53);
        addEdge("478", "479", 3.22);
        addEdge("479", "480", 3.45);
        addEdge("480", "481", 3.15);
        addEdge("481", "482", 6.53);
        addEdge("482", "483", 3.38);

        // ხუთასები
        addEdge("500", "501", 3.17);
        addEdge("501", "502", 3.51);
        addEdge("502", "503", 3.04);
        addEdge("503", "504", 6.55);
        addEdge("504", "505", 3.51);
        addEdge("505", "506", 3.24);
        addEdge("506", "507", 11.38);
        addEdge("507", "540", 4.63);
        addEdge("540", "s5a2", 1.98);
        addEdge("s5a2", "s5a1", 1.85);
        addEdge("507", "508", 5.36);
        addEdge("508", "509", 3.11);
        addEdge("509", "510", 3.44);
        addEdge("510", "511", 3.17);
        addEdge("511", "512", 3.44);
        addEdge("512", "513", 3.11);
        addEdge("513", "514", 3.44);
        addEdge("514", "515", 3.24);
        addEdge("515", "516", 6.61);
        addEdge("516", "517", 3.24);
        addEdge("517", "518", 9.99);
        addEdge("518", "519", 3.51);
        addEdge("519", "520", 9.79);
        addEdge("520", "521", 5.03);
        addEdge("521", "541", 4.89);
        addEdge("541", "s5d2", 2.18);
        addEdge("s5d2", "s5d1", 1.79);
        addEdge("521", "522", 6.61);
        addEdge("522", "523", 4.76);
        addEdge("523", "524", 3.11);
        addEdge("524", "525", 3.57);
        addEdge("525", "526", 6.61);
        addEdge("526", "527", 2.98);
        addEdge("527", "528", 3.64);
        addEdge("528", "529", 2.98);
        addEdge("529", "530", 3.57);
        addEdge("530", "531", 3.11);
        addEdge("531", "532", 6.61);
        addEdge("532", "533", 3.51);
        addEdge("533", "534", 3.11);
        addEdge("534", "535", 3.51);
        addEdge("535", "536", 3.11);
        addEdge("536", "537", 3.44);
        addEdge("537", "538", 3.11);
        addEdge("538", "539", 3.51);

        // ექვსასები
        addEdge("600", "601", 7.27);
        addEdge("601", "s6d2", 3.03);
        addEdge("s6d2", "s6d1", 2);
        addEdge("601", "602", 6.06);
        addEdge("602", "603", 3.51);

        // კიბეები
        addEdge("s3a1", "s4a1", 20.3);
        addEdge("s4a1", "s5a1", 20.3);
        addEdge("s1b1", "s2b1", 18.5);
        addEdge("s2b1", "s3b1", 20.3);
        addEdge("s3b1", "s4b1", 20.2);
        addEdge("s3c1", "s4c1", 20.3);
        addEdge("s0d1", "s3d1", 20.3);
        addEdge("s3d1", "s4d1", 20.3);
        addEdge("s4d1", "s5d1", 20.3);
        addEdge("s5d1", "s6d1", 20.2);
    }
}
