package com.it.shiro;


import com.it.domian.VipAccount;
import com.it.service.JluzhService;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

public class AccountRealm extends AuthorizingRealm {

    @Autowired
    private JluzhService jluzhService;

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection arg0) {
        System.out.println("执行授权逻辑");
        //给资源进行授权
        SimpleAuthenticationInfo info = new SimpleAuthenticationInfo();
        return null;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        System.out.println("执行认证逻辑");
        UsernamePasswordToken uToken = (UsernamePasswordToken)token;
        //获取username
        String username = uToken.getUsername();
        //从数据库获取
        VipAccount account = jluzhService.login(username);

        if(account == null)
        {
            throw new UnknownAccountException("用户不存在");
        }

        int rb = 1;
        if(account.getReadable()!=rb){
            throw new UnknownAccountException("用户被锁定");
        }

        return new SimpleAuthenticationInfo("",account.getPassword(),"");
    }
}
