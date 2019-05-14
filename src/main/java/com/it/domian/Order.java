package com.it.domian;



public class Order {

    private Integer orderid;//订单号
    private String sendername;//寄件人姓名
    private String senderphone;//寄件人电话
    private String senderaddress;//寄件人地址
    private String recipientname;//收件人姓名
    private String recipientphone;//收件人电话
    private String recipientaddress;//收件人地址
    private String message;//订单信息
    private String status;//订单状态
//    private User user;//若用户有登陆则寄件加上用户信息，方便进行查询

    public Order(){}

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public String getSendername() {
        return sendername;
    }

    public void setSendername(String sendername) {
        this.sendername = sendername;
    }

    public String getSenderphone() {
        return senderphone;
    }

    public void setSenderphone(String senderphone) {
        this.senderphone = senderphone;
    }

    public String getSenderaddress() {
        return senderaddress;
    }

    public void setSenderaddress(String senderaddress) {
        this.senderaddress = senderaddress;
    }

    public String getRecipientname() {
        return recipientname;
    }

    public void setRecipientname(String recipientname) {
        this.recipientname = recipientname;
    }

    public String getRecipientphone() {
        return recipientphone;
    }

    public void setRecipientphone(String recipientphone) {
        this.recipientphone = recipientphone;
    }

    public String getRecipientaddress() {
        return recipientaddress;
    }

    public void setRecipientaddress(String recipientaddress) {
        this.recipientaddress = recipientaddress;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }

    @Override
    public String toString() {
        return "Order{" +
                "orderid=" + orderid +
                ", sendername='" + sendername + '\'' +
                ", senderphone='" + senderphone + '\'' +
                ", senderaddress='" + senderaddress + '\'' +
                ", recipientname='" + recipientname + '\'' +
                ", recipientphone='" + recipientphone + '\'' +
                ", recipientaddress='" + recipientaddress + '\'' +
                ", message='" + message + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
