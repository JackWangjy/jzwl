package com.it.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TurnController {

    @RequestMapping("/")
    public String turnIndex(){
        return "index";
    }

    @RequestMapping("/search_order")
    public String turnGallery(){return "search_order";}

    @RequestMapping("/search_website")
    public String turnSearch_website(){return "search_website";}
}
