package com.it.controller;

import com.it.domian.VipAccount;
import com.it.domian.VipInfo;
import com.it.service.JluzhService;
import com.it.util.Result;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class AccountController {

    @Autowired
    private JluzhService jluzhService;

    @ResponseBody
    @RequestMapping("/testps")
    public String adas(String pwd){

        return pwd;
    }

    @RequestMapping("/toLogin")
    public Result login(String username, String password, HttpSession session) {
        Subject currentUser = SecurityUtils.getSubject();
        if (!currentUser.isAuthenticated()) {
            UsernamePasswordToken token = new UsernamePasswordToken(username, password);
            token.setRememberMe(true);
            try {
                currentUser.login(token);
                VipAccount account = jluzhService.login(username);
                session.setAttribute("account",account);
                return new Result(true,"登录成功");
            } catch (AuthenticationException ae) {
                System.out.println("登录失败：" + ae.getMessage());
                if("用户被锁定" == ae.getMessage()){
                    return new Result(false,"用户账号可能存在问题，已经被锁定，登录失败！");
                }else{
                    return new Result(false,"登录失败！");
                }
            }

        }
        return null;
    }

    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public Result reg(VipAccount vipAccount)
    {
        int i = jluzhService.countName(vipAccount.getUsername());
        if(i==0){
            System.out.println("1111");
            jluzhService.addAccount(vipAccount);
            String username = vipAccount.getUsername();
            VipAccount ac = jluzhService.login(username);
            VipInfo info = new VipInfo();
            info.setVipAccount(ac);
            info.setName(ac.getUsername());
            System.out.println(info);
            jluzhService.addUser(info);
            return new Result(true,"注册成功！");
        }else{
            return new Result(false,"注册失败！");
        }
    }


}
