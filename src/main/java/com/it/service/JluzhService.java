package com.it.service;

import com.it.domian.*;

import java.util.List;

public interface JluzhService {

    /**
     * 登录操作
     *
     * @param username
     * @param password
     * @return
     */
    Account login(String username, String password);

    /**
     * 查询所有账号信息
     *
     * @return
     */
    List<Account> getAllAccount();

    /**
     * 增加账号
     *
     * @param account
     */
    void addAccount(Account account);

    /**
     * 根据id删除账号
     *
     * @param id
     */
    void deleteAccountById(Integer id);

    /**
     * 修改账号信息
     *
     * @param account
     */
    void updateAccount(Account account);

    /**
     * 查询所有用户信息
     *
     * @return
     */
    List<User> getAllUser();

    /**
     * 添加用户信息
     *
     * @param user
     */
    void addUser(User user);

    /**
     * 查询同一身份的所有人
     *
     * @param shenfen
     * @return
     */
    List<User> getAllShenfen(String shenfen);

    /**
     * 根据id删除用户
     *
     * @param id
     */
    void deleteById(Integer id);

    /**
     * 修改用户信息
     * @param user
     */
    void updateUser(User user);

    /**
     * 添加留言信息
     *
     * @param message
     */
    void addMessage(Message message);

    /**
     * 查询所有留言信息
     *
     * @return
     */
    List<Message> getMessage();

    /**
     * 查询所有文章
     *
     * @return
     */
    List<Content> getAllContent();

    /**
     * @param content
     */
    void addContent(Content content);

    /**
     * 管理员删除内部留言
     * @param id
     */
    void deleteMessageById(Integer id);

    /**
     * 根据账号id删除用户
     * @param id
     */
    void deleteByAccountId(Integer id);

    /**
     * 根据id查询用户信息
     * @return
     */
    User getUserById(Integer id);

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

    /**
     * 查询所有网点信息
     * @return
     */
    List<Website> getAllWebsite();

    /**
     * 根据id删除网点信息
     * @param id
     */
    void deleteWebsite(Integer id);

    /**
     * 添加网点
     * @param website
     */
    void addWebsite(Website website);

    /**
     * 修改网点
     * @param website
     */
    void updateWebsite(Website website);

    /**
     * 查询所有订单
     * @return
     */
    List<Order> getAllOrder();

    /**
     * 根据订单号查询订单信息
     * @param orderid
     * @return
     */
    Order getOrderByOrderId(Integer orderid);

    /**
     * 修改订单信息
     * @param order
     */
    void updateOrder(Order order);

    /**
     * 根据订单号删除订单
     * @param orderid
     */
    void deleteByOrderid(Integer orderid);

    /**
     * 搜索订单
     * @return
     */
    List<Order> findOrder(Integer orderid, String sendername, String recipientname);

    /**
     * 添加订单
     * @param order
     */
    void insertOrder(Order order);

    /**
     * 用户查询网点
     * @param address
     * @return
     */
    List<Website> queryWebsite(String address);
}
