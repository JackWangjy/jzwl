package com.it.controller;

import com.it.domian.VipAccount;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
public class TurnController {

    @RequestMapping("/")
    public String turnIndex1(HttpSession session){
        Object obj = session.getAttribute("account");
        if(obj!=null){
            return "index";
        }else{
            VipAccount account = new VipAccount();
            account.setUsername("未登录");
            session.setAttribute("account",account);
        }
        return "index";
    }

    @RequestMapping("/index")
    public String turnIndex2(HttpSession session){
        Object obj = session.getAttribute("account");
        if(obj!=null){
            return "index";
        }else{
            VipAccount account = new VipAccount();
            account.setUsername("未登录");
            session.setAttribute("account",account);
        }
        return "index";
    }

    @RequestMapping("/search_order")
    public String turnGallery(HttpSession session){Object obj = session.getAttribute("account");
        if(obj!=null){
            return "search_order";
        }else{
            VipAccount account = new VipAccount();
            account.setUsername("未登录");
            session.setAttribute("account",account);
        }
        return "search_order";
    }

    @RequestMapping("/search_website")
    public String turnSearch_website(HttpSession session){
        Object obj = session.getAttribute("account");
        if(obj!=null){
            return "search_website";
        }else{
            VipAccount account = new VipAccount();
            account.setUsername("未登录");
            session.setAttribute("account",account);
        }
        return "search_website";
    }

    @RequestMapping("/send")
    public String turnSend(HttpSession session){
        Object obj = session.getAttribute("account");
        if(obj!=null){
            return "send";
        }else{
            VipAccount account = new VipAccount();
            account.setUsername("未登录");
            session.setAttribute("account",account);
        }
            return "send";
    }

    @RequestMapping("register")
    public String turnRegister(){return "register";}

    @RequestMapping("/login")
    public String turnLogin(){return "login";}

    @RequestMapping("/tologon")
    public String logon(HttpSession session){
        VipAccount account = new VipAccount();
        account.setUsername("未登录");
        session.setAttribute("account",account);
        return "login";
    }

    @RequestMapping("/myinfo")
    public String turnMyInfo(){
        return "myinfo";
    }

    @RequestMapping("/question")
    public String turnQue(){
        return "question";
    }

    @RequestMapping("/search_freight")
    public String turnFre(){
        return "search_freight";
    }

    @RequestMapping("/myaddressbook")
    public String turnAB(){return "myaddressbook";}

    @RequestMapping("/pay")
    public String turnPay(){return "alipay";}

    @RequestMapping("/success")
    public String turnSuccess(HttpSession session){
        Object obj = session.getAttribute("account");
        if(obj!=null){

        }else{
            VipAccount account = new VipAccount();
            account.setUsername("未登录");
            session.setAttribute("account",account);
        }
        return "/result/success";
    }


    @RequestMapping("/false")
    public String turnEr(HttpSession session){
        Object obj = session.getAttribute("account");
        if(obj!=null){

        }else{
            VipAccount account = new VipAccount();
            account.setUsername("未登录");
            session.setAttribute("account",account);
        }
        return "/result/error";
    }

    @RequestMapping("/a")
    public String turnErd(){

        return "/result/test";
    }

}
