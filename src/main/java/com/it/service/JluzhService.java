package com.it.service;

import com.it.domian.*;

import java.util.List;

public interface JluzhService {

    /**
     * 登录操作
     *
     * @param username
     * @return
     */
    VipAccount login(String username);

    /**
     * 增加账号
     *
     * @param vipAccount
     */
    void addAccount(VipAccount vipAccount);

//    /**
//     * 根据id删除账号
//     *
//     * @param id
//     */
//    void deleteAccountById(Integer id);

    /**
     * 修改账号信息
     *
     * @param vipAccount
     */
    void updateAccount(VipAccount vipAccount);

//    /**
//     * 查询所有用户信息
//     *
//     * @return
//     */
//    List<VipInfo> getAllUser();

    /**
     * 添加用户信息
     *
     * @param info
     */
    void addUser(VipInfo info);


//    /**
//     * 根据id删除用户
//     *
//     * @param id
//     */
//    void deleteById(Integer id);

    /**
     * 修改用户信息
     * @param user
     */
    void updateUser(VipInfo user);

    /**
     * @param content
     */
    void addContent(Content content);

//    /**
//     * 管理员删除内部留言
//     * @param id
//     */
//    void deleteMessageById(Integer id);
//
//    /**
//     * 根据账号id删除用户
//     * @param id
//     */
//    void deleteByAccountId(Integer id);

    /**
     * 根据id查询用户信息
     * @return
     */
    VipInfo getUserById(Integer id);

//    /**
//     * 删除留言内容
//     * @param id
//     */
//    void deleteContentById(Integer id);
//
//    /**
//     * 修改留言
//     * @param content
//     */
//    void updateContent(Content content);

//    /**
//     * 查询所有网点信息
//     * @return
//     */
//    List<Website> getAllWebsite();

//    /**
//     * 根据id删除网点信息
//     * @param id
//     */
//    void deleteWebsite(Integer id);
//
//    /**
//     * 添加网点
//     * @param website
//     */
//    void addWebsite(Website website);

//    /**
//     * 修改网点
//     * @param website
//     */
//    void updateWebsite(Website website);


    /**
     * 根据订单号查询订单信息
     * @param orderid
     * @return
     */
    Order getOrderByOrderId(String orderid);


    /**
     * 用户查询网点
     * @param
     * @return
     */
    List<Website> queryWebsite(String province,String school,String yuanqu);

    /**
     * 用户下单
     * @param order
     */
    void placeOrder(Order order);

    /**
     * 查询用户名是否重复
     * @param username
     * @return
     */
    int countName(String username);

    /**
     * 获取信息
     * @param id
     * @return
     */
    VipInfo getInfo(Integer id);

    /**
     * 查询地址簿
     * @param account_id
     * @return
     */
    List<AddressBook> getMyAddressBook(Integer account_id);

    /**
     * 新增地址
     * @param addressBook
     */
    void insertAddressBook(AddressBook addressBook);

    /**
     * 删除地址
     * @param id
     */
    void deleteaddress(Integer id);

    /**
     * 更新地址
     * @param addressBook
     */
    void updateAddress(AddressBook addressBook);

    /**
     * 计算地址簿数量
     * @param account_id
     * @return
     */
    int totalAddress(Integer account_id);

    /**
     * 查询我的快递
     * @param id
     * @return
     */
    List<Order> findOrderByAccountId(Integer id);

    /**
     * 运费查询
     * @param start
     * @param end
     * @return
     */
    Freight getFre(String start, String end);

    /**
     * 根据电话查询待收取的包裹
     * @param  phone
     * @return
     */
    List<Order> findOrderByRecipientPhone(String recipientphone);
}
