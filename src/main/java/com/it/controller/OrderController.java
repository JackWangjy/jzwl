package com.it.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.it.domian.Freight;
import com.it.domian.Order;
import com.it.domian.VipAccount;
import com.it.domian.VipInfo;
import com.it.service.JluzhService;
import com.it.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;
import java.util.Random;

@Controller
//@RequestMapping("/order")
public class OrderController {

    @Autowired
    private JluzhService jluzhService;


    @ResponseBody
    @RequestMapping("/query")
    public Order getOdMs(String orderid){
        Order order = jluzhService.getOrderByOrderId(orderid);
        return order;

    }



    @ResponseBody
    @RequestMapping(value = "/addOrder",method= RequestMethod.POST)
    public Result send(Order order, String w, String sad2, String rad2, HttpServletResponse response, HttpSession session){
        response.setContentType("application/json; charset=utf-8");
        VipAccount account = (VipAccount)session.getAttribute("account");
        order.setVipAccount(account);
        Freight freight = jluzhService.getFre(sad2,rad2);
        String str = w.replace("KG","");
        int w1 = Integer.parseInt(str);
        order.setPrice(freight.getPrice()*w1);
        order.setWeight(w1);
        String base = "0123456789";
        Random random = new Random();
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < 10; i++) {
            int number = random.nextInt(base.length());
            sb.append(base.charAt(number));
        }
        String str2 = sb.toString();
        Date date = new Date();
        order.setCreatetime(date);
        order.setOrderid(str2);
        String str3 = "【"+order.getSenderaddress()+"】"+"等待揽件...   |";
        order.setStatus(str3);
        session.setAttribute("order",order);
        return new Result(true,"成功下单，等待付款!");
    }

    @RequestMapping(value = "/getOr",method= RequestMethod.POST )
    public String get(@RequestParam String orderid, Model model){
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

    @RequestMapping("/queryOb")
    public String queryOb(@RequestParam Integer pageNum, Model model,HttpSession session){

        Page<Object> page = PageHelper.startPage(pageNum,5);
        VipAccount account=(VipAccount)session.getAttribute("account");
        List<Order> orders = jluzhService.findOrderByAccountId(account.getId());
        model.addAttribute("orders",orders);
        model.addAttribute("page",page);
        return "myorderbook";
    }

    @RequestMapping("/queryRe")
    public String queryReciOb(@RequestParam Integer pageNum, Model model,HttpSession session){
        VipAccount account=(VipAccount)session.getAttribute("account");
        VipInfo info = jluzhService.getInfo(account.getId());
//        String phone = info.getPhonenumber();
        Page<Object> page = PageHelper.startPage(pageNum,5);
        List<Order> orders = jluzhService.findOrderByRecipientPhone(info.getPhonenumber());
        model.addAttribute("order2",orders);
        model.addAttribute("page2",page);
        return "myorderbook2";
    }
}
