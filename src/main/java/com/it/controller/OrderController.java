package com.it.controller;

import com.it.domian.Order;
import com.it.service.JluzhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class OrderController {

    @Autowired
    private JluzhService jluzhService;


    @ResponseBody
    @RequestMapping("/query")
    public Order getOdMs(Integer orderid){
        Order order = jluzhService.getOrderByOrderId(orderid);
        System.out.println(order.getStatus());
        System.out.println();
        return order;

    }

    @RequestMapping(value = "/get",method= RequestMethod.GET )
    public String get(@RequestParam Integer orderid, Model model){
        Order order = jluzhService.getOrderByOrderId(orderid);
        if(order!=null) {
            model.addAttribute("order", order);
        }else{
            Order order1 = new Order();
            order1.setStatus("查询不到该订单信息或者该订单不存在！");
            model.addAttribute("order",order1);
        }
        return "search_order";
    }
}
