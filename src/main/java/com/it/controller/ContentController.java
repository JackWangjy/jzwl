package com.it.controller;

import com.it.domian.Content;
import com.it.service.JluzhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ContentController {

    @Autowired
    private JluzhService jluzhService;

    @ResponseBody
    @RequestMapping("/addMs")
    public String addMs(Content content){
//        System.out.println(content);
        jluzhService.addContent(content);
//        System.out.println(content);
        String rs="true";
        return rs;
    }
}
