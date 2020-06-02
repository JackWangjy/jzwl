package com.it.mapper;

import com.it.domian.Order;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface OrderMapper {

//    @Select("select * from tbl_order")
//    List<Order> getAllOrder();

    @Select("select * from tbl_order where orderid = #{orderid}")
    Order getOrderByOrderId(String orderid);

//    @Update("update tbl_order set sendername=#{sendername},senderphone=#{senderphone},senderaddress=#{senderaddress}," +
//            "recipientname=#{recipientname},recipientphone=#{recipientphone},recipientaddress=#{recipientaddress}," +
//            "message=#{message},status=#{status} where orderid=#{orderid}")
//    void updateOrder(Order order);

//    @Delete("delete from tbl_order where orderid=#{orderid}")
//    void deleteByOrderid(String orderid);

//    List<Order> findOrder(@Param("orderid") String orderid, @Param("sendername") String sendername, @Param("recipientname") String recipientname);

//    @Insert("insert into tbl_order (orderid,sendername,senderphone,senderaddress,recipientname,recipientphone,recipientaddress,message,status)" +
//            " values(#{orderid},#{sendername},#{senderphone},#{senderaddress},#{recipientname},#{recipientphone},#{recipientaddress},#{message},#{status})")
//    void insertOrder(Order order);

//    @Insert("insert into tbl_order (orderid,sendername,senderphone,senderaddress,recipientname,recipientphone,recipientaddress,message,account_id)" +
//            " values(#{orderid},#{sendername},#{senderphone},#{senderaddress},#{recipientname},#{recipientphone},#{recipientaddress},#{message},#{account.id})")
    @SelectProvider(type= OrderDynaSqlProvider.class,method="addOrder")
    void placeOrder(Order order);

    @Select("select * from tbl_order where vip_account_id = #{id}")
    List<Order> findOrderByAccountId(Integer id);

    @Select("select * from tbl_order where recipientphone = #{recipientphone}")
    List<Order> findOrderByRecipientPhone(String recipientphone);
}
