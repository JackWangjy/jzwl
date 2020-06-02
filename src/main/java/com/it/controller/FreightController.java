package com.it.controller;

import com.it.domian.Freight;
import com.it.service.JluzhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FreightController {

    @Autowired
    private JluzhService jluzhService;

    @RequestMapping("/queryFre")
    public Freight query(String origin,String destination,int weight, Model model){
        Freight freight = jluzhService.getFre(origin,destination);
        double m = freight.getPrice();
        freight.setPrice(m*weight);
        return freight;
    }
}
