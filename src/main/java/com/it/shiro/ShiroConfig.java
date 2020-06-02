package com.it.shiro;

import at.pollux.thymeleaf.shiro.dialect.ShiroDialect;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.LinkedHashMap;
import java.util.Map;

@Configuration
public class ShiroConfig {

    @Bean(name="shiroFilterFactoryBean")
    public ShiroFilterFactoryBean getShiroFilterFactoryBean(@Qualifier("securityManager") DefaultWebSecurityManager securityManager) {
        ShiroFilterFactoryBean  shiroFilterFactoryBean = new  ShiroFilterFactoryBean();
        //设置安全管理器
        shiroFilterFactoryBean.setSecurityManager(securityManager);

        //添加shiro内置过滤器
        /**
         * Shiro内置过滤器 可以实现权限相关的拦截器
         *  常用的过滤器：
         * 	anon：无需认证（登录）就可以访问
         * 	authc：必须认证才可以访问
         * 	user：如果使用rememberMe的功能可以直接访问
         * 	perms：该资源必须得到资源权限才可以访问
         * 	role：该资源必须得到角色权限才可以访问
         */

        Map<String,String> filterMap = new LinkedHashMap<String,String>();
        filterMap.put("/static/**","anon");


        filterMap.put("/login","anon");
        filterMap.put("/tologon","logout");//退出释放缓存
        filterMap.put("/search_freight","anon");
        filterMap.put("/search_order","anon");
        filterMap.put("/search_website","anon");
        filterMap.put("/send","anon");
        //该访问路径需要登录才可以进行
        filterMap.put("/myinfo","authc");
        filterMap.put("/info/**","authc");
        filterMap.put("/queryOb/**","authc");
        filterMap.put("/queryRe/**","authc");
        filterMap.put("/queryAb/**","authc");

        //授权过滤器
        //当前授权拦截后，shiro会自动跳到未授权页面

//
//        filterMap.put("/*", "authc");

        //修改调整登录页面
        shiroFilterFactoryBean.setLoginUrl("/login");
        //设置未授权页面
//        shiroFilterFactoryBean.setUnauthorizedUrl("/noAuth");
        shiroFilterFactoryBean.setFilterChainDefinitionMap(filterMap);
        System.out.println("执行shiro");
        return shiroFilterFactoryBean;
    }

    /**
     * 创建DefaultWebSecurityManager
     */
    @Bean(name="securityManager")
    public DefaultWebSecurityManager getDefaultWebSecurityManager(@Qualifier("AccountRealm") AccountRealm accountRealm) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        //关联Realm
        securityManager.setRealm(accountRealm);
        return securityManager;

    }

    /**
     * 创建Realm
     */
    @Bean(name="AccountRealm")
    public AccountRealm getRealm() {
        return new AccountRealm();
    }

    /**
     * 配送shiroDialect 用于thymeleaf和shiro标签配合使用
     */
    @Bean
    public ShiroDialect getShiroDialect() {
        return new ShiroDialect();
    }
}