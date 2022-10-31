package com.example.demo.entity;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;

// 取得zone和index -> 蒐集url
public class SightHandler {
    private Document document;
    private Elements selectedH4;
    private String zone;
    private int indexOfH4 = 2;
    private int indexOfUl = 3;
    private int indexOfLi = 1;

    public SightHandler() {
        try {
            document = Jsoup.connect("https://www.travelking.com.tw/tourguide/taiwan/keelungcity/").get();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Get the input zone
    public String getZone(String zone) {
        selectedH4 = document.select("#guide-point > div > h4");
        for (Element el : selectedH4) {
            if (el.text().contains(zone)) {
                this.zone = el.text();
                break;
            }
            indexOfH4 += 2;
            indexOfUl = indexOfH4 + 1;
        }

        return this.zone;
    }

    // Get the url of each places in the zone
    public ArrayList<String> getURLs() {
        ArrayList<String> URLs = new ArrayList<String>();

        while (true) {
            Elements link = document.select("#guide-point > div > ul:nth-child(" + indexOfUl + ") > li:nth-child(" + indexOfLi + ") > a");
            String url = link.attr("abs:href");
            if(url.equals(""))
                break;
            URLs.add(url);
            indexOfLi++;
        }

        return URLs;
    }
}
