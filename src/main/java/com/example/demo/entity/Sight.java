package com.example.demo.entity;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

public class Sight {
    private Document document;

    private String sightName;
    private String zone;
    private String category;
    private String photoURL;
    private String description;
    private String address;


    public Sight(String url) {
        try {
            document = Jsoup.connect(url).get();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void setZone(String zone) {
        this.zone = zone;
    }

    public String getZone() {
        return zone;
    }

    public void setSightName() {
        Elements sightName = document.select("#point_area > h1 > span");
        this.sightName = sightName.text();
    }

    public String getSightName() {
        return sightName;
    }

    public void setCategory() {
        Elements category = document.select("#point_area > cite > span.point_type > span:nth-child(2) > strong");
        this.category = category.text();
    }

    public String getCategory() {
        return category;
    }

    public void setPhotoURL() {
        Elements imageElement = document.select("img");
        for (Element el : imageElement) {
            if (el.hasAttr("src")) {
                this.photoURL = el.attr("data-src");
                return;
            }
        }
        this.photoURL = "";
    }

    public String getPhotoURL() {
        return photoURL;
    }

    public void setDescription() {
        Elements description = document.getElementsByClass("text");
        this.description = description.first().ownText();
    }

    public String getDescription() {
        return description;
    }

    public void setAddress() {
        Elements address = document.select("#point_data > div.address > p > a > span");
        this.address = address.text();
    }

    public String getAddress() {
        return address;
    }

    @Override
    public String toString() {
        return  "SightName: " + sightName + '\n' +
                "Zone: " + zone + '\n' +
                "Category: " + category + '\n' +
                "PhotoURL: \n" + photoURL + '\n' +
                "Description: " + description + '\n' +
                "Address: " + address + '\n';
    }
}