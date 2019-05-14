package com.it.service.impl;

import com.it.domian.*;
import com.it.mapper.*;
import com.it.service.JluzhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;

@Transactional(propagation = Propagation.REQUIRED,isolation = Isolation.DEFAULT)
@Service
public class JluzhServiceImpl implements JluzhService {

    /**
     * 自动注入mapper类
     */
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private MessageMapper messageMapper;
    @Autowired
    private AccountMapper accountMapper;
    @Autowired
    private ContentMapper contentMapper;
    @Autowired
    private WebsiteMapper websiteMapper;
    @Autowired
    private OrderMapper orderMapper;

    @Override
    public List<User> getAllShenfen(String shenfen) {
        List<User> users = userMapper.getAllShenfen(shenfen);
        return users;
    }

    @Override
    public void deleteById(Integer id) {
        userMapper.deleteById(id);
    }

    @Override
    public void addUser(User user) {
        userMapper.addUser(user);
    }

    @Override
    public List<User> getAllUser() {
        List<User> users = userMapper.getAllUser();
        return users;
    }

    @Override
    public void addMessage(Message message) {
        messageMapper.addMessage(message);
    }

    @Override
    public Account login(String username, String password) {
        Account ac = accountMapper.login(username,password);
        return ac;
    }

    @Override
    public List<Message> getMessage() {
        List<Message> messages = messageMapper.getMessage();
        return messages;
    }

    @Override
    public List<Account> getAllAccount() {
        List<Account> accounts = accountMapper.getAllAccount();
        return accounts;
    }

    @Override
    public void deleteMessageById(Integer id) {
        messageMapper.deleteMessageById(id);
    }

    @Override
    public void addAccount(Account account) {
        accountMapper.addAccount(account);
    }

    @Override
    public void deleteAccountById(Integer id) {
        accountMapper.deleteAccountById(id);
    }

    @Override
    public void updateAccount(Account account) {
        accountMapper.updateAccount(account);
    }

    @Override
    public List<Content> getAllContent() {
        List<Content> contents = contentMapper.getAllContent();
        return contents;
    }

    @Override
    public void addContent(Content content) {
        Date d = new Date();//获取当时间对象
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH：mm：ss");//获取时间格式
        String time = sdf.format(d);//将当前时间临时存储time上
        content.setTime(time);
        contentMapper.addContent(content);
    }

    @Override
    public void updateUser(User user) {
        userMapper.updateUser(user);
    }

    @Override
    public void deleteByAccountId(Integer id) {
        userMapper.deleteByAccountId(id);
    }

    @Override
    public User getUserById(Integer id) {
        User user = userMapper.getUserById(id);
        return user;
    }

//    @Override
//    public void deleteContentById(Integer id) {
//        contentMapper.deleteContentById(id);
//    }
//
//    @Override
//    public void updateContent(Content content) {
//        contentMapper.updateContent(content);
//    }

    @Override
    public List<Website> getAllWebsite() {
        List<Website> list = websiteMapper.getAllWebsite();
        return list;
    }

    @Override
    public void deleteWebsite(Integer id) {
        websiteMapper.deleteWebsite(id);
    }

    @Override
    public void addWebsite(Website website) {
        websiteMapper.addWebsite(website);
    }

    @Override
    public void updateWebsite(Website website) {
        websiteMapper.updateWebsite(website);
    }

    @Override
    public List<Order> getAllOrder() {
        List<Order> list = orderMapper.getAllOrder();
        return list;
    }

    @Override
    public Order getOrderByOrderId(Integer orderid) {
        Order order = orderMapper.getOrderByOrderId(orderid);
        return order;
    }

    @Override
    public void updateOrder(Order order) {
        orderMapper.updateOrder(order);
    }

    @Override
    public void deleteByOrderid(Integer orderid) {
        orderMapper.deleteByOrderid(orderid);
    }

    @Override
    public List<Order> findOrder(Integer orderid,String sendername,String recipientname) {
        List<Order> list = orderMapper.findOrder(orderid,sendername,recipientname);
        return list;
    }

    @Override
    public void insertOrder(Order order) {
        String base = "0123456789";
        Random random = new Random();
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < 10; i++) {
            int number = random.nextInt(base.length());
            sb.append(base.charAt(number));
        }
        String str = sb.toString();
        Integer orderid = Integer.parseInt(str);
        order.setOrderid(orderid);
        orderMapper.insertOrder(order);
    }

    @Override
    public List<Website> queryWebsite(String address) {
        return websiteMapper.queryWebsite(address);
    }
}
