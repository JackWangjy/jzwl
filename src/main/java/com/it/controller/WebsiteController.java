package com.it.controller;

import com.it.domian.Website;
import com.it.service.JluzhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/website")
public class WebsiteController {

    @Autowired
    private JluzhService jluzhService;

    @RequestMapping(value = "/query",method = RequestMethod.POST)
    public List<Website> queryWs(String province,String school,String yuanqu){
        List<Website> websites = jluzhService.queryWebsite(province,school,yuanqu);
        return websites;

    }
}
