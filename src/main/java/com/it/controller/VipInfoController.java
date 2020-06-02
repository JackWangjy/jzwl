package com.it.controller;

import com.it.domian.VipInfo;
import com.it.service.JluzhService;
import com.it.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class VipInfoController {

    @Autowired
    private JluzhService jluzhService;

    @RequestMapping("/info/{id}")
    public String turnInfo(@PathVariable("id") Integer id, Model model){
        VipInfo info = jluzhService.getInfo(id);
        model.addAttribute("user",info);
        return "info";
    }

    @ResponseBody
    @RequestMapping("/upInfo")
    public Result updateInfo(VipInfo info){
        if(info != null){
            jluzhService.updateUser(info);
            return new Result(true,"更新成功！");
        }else{
            return new Result(false,"更新失败！");
        }
    }

}
