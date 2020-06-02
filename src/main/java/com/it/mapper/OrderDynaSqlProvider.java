package com.it.mapper;

import com.it.domian.Order;
import org.apache.ibatis.jdbc.SQL;

public class OrderDynaSqlProvider {
    //动态插入
    public String addOrder(Order order) {
        return new SQL() {
            {
                INSERT_INTO("tbl_order");
                if(order.getOrderid()!=null) {
                    VALUES("orderid","#{orderid}");
                }
                if(order.getSendername()!=null) {
                    VALUES("sendername","#{sendername}");
                }
                if(order.getSenderphone()!=null) {
                    VALUES("senderphone","#{senderphone}");
                }
                if(order.getSenderaddress()!=null) {
                    VALUES("senderaddress","#{senderaddress}");
                }
                if(order.getRecipientname()!=null){
                    VALUES("recipientname","#{recipientname}");
                }
                if(order.getRecipientphone()!=null){
                    VALUES("recipientphone","#{recipientphone}");
                }
                if(order.getRecipientaddress()!=null){
                    VALUES("recipientaddress","#{recipientaddress}");
                }
                if(order.getMessage()!=null){
                    VALUES("message","#{message}");
                }
                if(order.getStatus()!=null){
                    VALUES("status","#{status}");
                }
                if(order.getCreatetime()!=null){
                    VALUES("createtime","#{createtime}");
                }
                if(order.getFinishtime()!=null){
                    VALUES("finishtime","#{finishtime}");
                }
                if(order.getPrice()!=0){
                    VALUES("price","#{price}");
                }
                if(order.getVipAccount()!=null){
                    VALUES("vip_account_id","#{vipAccount.id}");
                }
                if(order.getWeight()!=0){
                    VALUES("weight","#{weight}");
                }
            }
        }.toString();
    }
}
