package com.example.demo.entity;

public class SightTest {
    public static void main(String[] args) {
        KeelungSightsCrawler crawler = new KeelungSightsCrawler();
        Sight [] sights = crawler.getItems("中山");
        for (Sight s: sights) {
            System.out.println(s);
        }
    }
}
