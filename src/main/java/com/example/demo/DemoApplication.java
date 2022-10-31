package com.example.demo;

import com.example.demo.entity.KeelungSightsCrawler;
import com.example.demo.entity.Sight;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@SpringBootApplication
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@GetMapping("/SightAPI")
	public ResponseEntity<List<Sight>> getSight(
			@RequestParam(value = "zone", defaultValue = "") String name) {
		KeelungSightsCrawler crawler = new KeelungSightsCrawler();
		Sight [] sights = crawler.getItems(name);
		List<Sight> sightList = new ArrayList<Sight>(sights.length);
		for (Sight sight : sights)
			sightList.add(sight);
		return ResponseEntity.ok().body(sightList);
	}

}

