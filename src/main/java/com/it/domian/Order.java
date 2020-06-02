package com.it.domian;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Order implements Serializable {

    private String orderid;//订单号
    private String sendername;//寄件人姓名
    private String senderphone;//寄件人电话
    private String senderaddress;//寄件人地址
    private String recipientname;//收件人姓名
    private String recipientphone;//收件人电话
    private String recipientaddress;//收件人地址
    private String message;//订单信息
    private String status;//订单状态
    private String createtime;
    private String finishtime;
    private double price;
    private VipAccount vipAccount;
    private int weight;

    public Order(){

    }

    public String getOrderid() {
        return orderid;
    }

    public void setOrderid(String orderid) {
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

    public String getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.createtime = simpleDateFormat.format(createtime);
    }

    public String getFinishtime() {
        return finishtime;
    }

    public void setFinishtime(Date finishtime) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.finishtime = simpleDateFormat.format(finishtime);
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public VipAccount getVipAccount() {
        return vipAccount;
    }

    public void setVipAccount(VipAccount vipAccount) {
        this.vipAccount = vipAccount;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderid='" + orderid + '\'' +
                ", sendername='" + sendername + '\'' +
                ", senderphone='" + senderphone + '\'' +
                ", senderaddress='" + senderaddress + '\'' +
                ", recipientname='" + recipientname + '\'' +
                ", recipientphone='" + recipientphone + '\'' +
                ", recipientaddress='" + recipientaddress + '\'' +
                ", message='" + message + '\'' +
                ", status='" + status + '\'' +
                ", createtime='" + createtime + '\'' +
                ", finishtime='" + finishtime + '\'' +
                ", price=" + price +
                ", vipAccount=" + vipAccount +
                ", weight=" + weight +
                '}';
    }
}
