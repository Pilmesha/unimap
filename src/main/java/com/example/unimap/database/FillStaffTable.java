package com.example.unimap.database;
import java.util.HashMap;
import java.util.Map;
public class FillStaffTable {

    private static Map<String, String> staffRooms = new HashMap<>();

    static {
        staffRooms.put("tamar tatrishvili", "303");
        staffRooms.put("manana khachidze", "324");
        staffRooms.put("maia archuadze", "325");
        staffRooms.put("lela mirtskhulava", "325");
        staffRooms.put("papuna qarchava", "325");
        staffRooms.put("magda tsintsadze", "326");
        staffRooms.put("irina khutsishvili", "327");
        staffRooms.put("bidzina midodashvili", "327");
        staffRooms.put("gia sirbiladze", "328");
        staffRooms.put("tamaz tadumadze", "330");
        staffRooms.put("grigor giorgadze", "330");
        staffRooms.put("ilia tavkhelidze", "330");
        staffRooms.put("roman koplatadze", "330");
        staffRooms.put("otar jokhadze", "330");
        staffRooms.put("aleksandre aplakovi", "332");
        staffRooms.put("ana danelia", "332");
        staffRooms.put("shalva zviadadze", "332");
        staffRooms.put("teimuraz akhobadze", "333");
        staffRooms.put("tengiz kopaliani", "333");
        staffRooms.put("givi nadibaidze", "333");
        staffRooms.put("besik chikvinidze", "334");
        staffRooms.put("besarion dochviri", "334");
        staffRooms.put("petre babilua", "335");
        staffRooms.put("nora kekelia", "335");
        staffRooms.put("mzevinar patsatsia", "335");
        staffRooms.put("elizbar nadaraia", "336");
        staffRooms.put("lela alkhazishvili", "353");
        staffRooms.put("bezhan ghvaberidze", "353");
        staffRooms.put("pridon dvalishvili", "353");
        staffRooms.put("natela archvadze", "354");
        staffRooms.put("liana lortkipanidze", "354");
        staffRooms.put("alexander gamkrelidze", "355");
        staffRooms.put("nana odishelidze", "356");
        staffRooms.put("giorgi tutberidze", "356");
        staffRooms.put("revaz kurdiani", "357");
        staffRooms.put("teimuraz manjaparashvili", "357");
        staffRooms.put("gela besiashvili", "358");
        staffRooms.put("tariel khvedelidze", "358");
        staffRooms.put("revaz grogolia", "359");
        staffRooms.put("roland omanadze", "360");
        staffRooms.put("archil kipiani", "361");
        staffRooms.put("vladimer odisharia", "361");
        staffRooms.put("gia avalishvili", "362");
        staffRooms.put("jemal peradze", "362");
        staffRooms.put("jemal rogava", "362");
        staffRooms.put("giorgi jaiani", "363");
        staffRooms.put("ushangi goginava", "364");
        staffRooms.put("tamaz vashakmadze", "365");
        staffRooms.put("tinatin davitashvili", "365");
        staffRooms.put("omar purtukhia", "366");
        staffRooms.put("zaza khechinashvili", "366");
        staffRooms.put("mikheil amaglobeli", "319");
        staffRooms.put("bachuki mesablishvili", "319");
        staffRooms.put("vakhtang lomadze", "319");
        staffRooms.put("ketevan shavgulidze", "319");
        staffRooms.put("ruslan surmanidze", "319");
        staffRooms.put("leri gogoladze", "221");
        staffRooms.put("vakhtang tsagareishvili", "221");
        staffRooms.put("rusudan meskhia", "221");
        staffRooms.put("malkaz bakuradze", "322");
        staffRooms.put("julieta gagoshvili", "406");
        staffRooms.put("teimuraz vepkhvadze", "206");
        staffRooms.put("nana koshoradze", "605");
        staffRooms.put("giorgi burjanadze", "621");
        staffRooms.put("nino inasaridze", "534");
        staffRooms.put("elene cherkezia", "534");
    }

    static void fill() {
        for (String staff : staffRooms.keySet()) {
            GaniviDataApi.insertIntoStaffTable(staff, staffRooms.get(staff));
        }
    }

}