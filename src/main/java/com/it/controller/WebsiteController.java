package com.it.controller;

import com.it.domian.Website;
import com.it.service.JluzhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WebsiteController {

    @Autowired
    private JluzhService jluzhService;

    @RequestMapping("/queryWs")
    public List<Website> queryWs(Model model, @RequestParam String address){
        String result;
        List<Website> websites = jluzhService.queryWebsite(address);
        model.addAttribute("websites", websites);

        return websites;

    }
}
