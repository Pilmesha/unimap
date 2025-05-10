package com.example.unimap.service;

import java.util.*;

public class GeorgianToLatinMaker {
    static Map<Character, String> georgianToLatin = new HashMap<>();
    private static char[] georgianLetters = {'ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ',
            'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც',
            'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ', ' ', '-'};
    private static String[] correspondingLatinLetters = {"a", "b", "g", "d", "e", "v", "z", "t",
            "i", "k", "l", "m", "n", "o", "p", "j", "r", "s", "t", "u", "p", "k", "gh", "k", "sh",
            "ch", "ts", "dz", "ts", "ch", "kh", "j", "h", " ", "-"};

    static {
        for (int i = 0; i < georgianLetters.length; i++) {
            georgianToLatin.put(georgianLetters[i], correspondingLatinLetters[i]);
        }
    }

    private GeorgianToLatinMaker(){
    }
}