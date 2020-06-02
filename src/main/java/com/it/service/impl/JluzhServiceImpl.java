package com.it.service.impl;

import com.it.domian.*;
import com.it.mapper.*;
import com.it.service.JluzhService;
import org.apache.shiro.authc.Account;
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
    private VipInfoMapper infoMapper;
    @Autowired
    private AccountMapper accountMapper;
    @Autowired
    private ContentMapper contentMapper;
    @Autowired
    private WebsiteMapper websiteMapper;
    @Autowired
    private OrderMapper orderMapper;
    @Autowired
    private AddressBookMapper addressBookMapper;
    @Autowired
    private FreightMapper freightMapper;


    @Override
    public void addUser(VipInfo info) {
        Date d = new Date();//获取当时间对象
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH：mm：ss");//获取时间格式
//        String time = sdf.format(d);//将当前时间临时存储time上
        info.setCreatetime(d);
        infoMapper.addUser(info);
    }



    @Override
    public VipAccount login(String username) {
        VipAccount ac = accountMapper.login(username);
        return ac;
    }


    @Override
    public void addAccount(VipAccount vipAccount) {
        accountMapper.addAccount(vipAccount);
    }

    @Override
    public void updateAccount(VipAccount vipAccount) {
        accountMapper.updateAccount(vipAccount);
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
    public void updateUser(VipInfo info) {
        infoMapper.updateUser(info);
    }

    @Override
    public VipInfo getUserById(Integer id) {
        VipInfo info = infoMapper.getUserById(id);
        return info;
    }


    @Override
    public Order getOrderByOrderId(String orderid) {
        Order order = orderMapper.getOrderByOrderId(orderid);
        return order;
    }


//    @Override
//    public void insertOrder(Order order) {
//        String base = "0123456789";
//        Random random = new Random();
//        StringBuffer sb = new StringBuffer();
//        for (int i = 0; i < 10; i++) {
//            int number = random.nextInt(base.length());
//            sb.append(base.charAt(number));
//        }
//        String str = sb.toString();
////        Integer orderid = Integer.parseInt(str);
//        order.setOrderid(str);
//        orderMapper.insertOrder(order);
//    }

    @Override
    public List<Website> queryWebsite(String province,String school,String yuanqu) {
        return websiteMapper.queryWebsite(province,school,yuanqu);
    }

    @Override
    public void placeOrder(Order order) {
        orderMapper.placeOrder(order);
    }

    @Override
    public int countName(String username) {
        return accountMapper.countName(username);
    }

    @Override
    public VipInfo getInfo(Integer id) {
        return infoMapper.getInfo(id);
    }

    @Override
    public List<AddressBook> getMyAddressBook(Integer account_id) {
        return addressBookMapper.getMyAddressBook(account_id);
    }

    @Override
    public void insertAddressBook(AddressBook addressBook) {
        addressBookMapper.insertAddressBook(addressBook);
    }

    @Override
    public void deleteaddress(Integer id) {
        addressBookMapper.deleteaddress(id);
    }

    @Override
    public void updateAddress(AddressBook addressBook) {
        addressBookMapper.updateAddress(addressBook);
    }

    @Override
    public int totalAddress(Integer account_id) {
        return addressBookMapper.totalAddress(account_id);
    }

    @Override
    public List<Order> findOrderByAccountId(Integer id) {
        return orderMapper.findOrderByAccountId(id);
    }

    @Override
    public Freight getFre(String start, String end) {
        return freightMapper.getFre(start,end);
    }

    @Override
    public List<Order> findOrderByRecipientPhone(String recipientphone) {
        return orderMapper.findOrderByRecipientPhone(recipientphone);
    }
}
