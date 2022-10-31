package com.example.demo.entity;

import java.util.ArrayList;
import java.util.NoSuchElementException;

public class KeelungSightsCrawler {
    public Sight[] getItems(String zone) {
        ArrayList<Sight> sightArray = new ArrayList<Sight>();

        // Get zone and all the urls related to the zone
        SightHandler handler = new SightHandler();
        String region = handler.getZone(zone);
        ArrayList<String> URLs = handler.getURLs();

        for (String url : URLs)
            sightArray.add(setSight(url, region));

        // Convert the ArrayList to Sight[]
        Sight[] sights = new Sight[sightArray.size()];
        sights = sightArray.toArray(sights);
        return sights;
    }

    // Set the data of Sight
    public Sight setSight(String url, String region) {
        Sight sight = new Sight(url);
        sight.setSightName();
        sight.setZone(region);
        sight.setCategory();
        sight.setPhotoURL();
        sight.setDescription();
        sight.setAddress();

        return sight;
    }
}
