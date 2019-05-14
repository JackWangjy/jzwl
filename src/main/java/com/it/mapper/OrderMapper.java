package com.it.mapper;

import com.it.domian.Order;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface OrderMapper {

    @Select("select * from tbl_order")
    List<Order> getAllOrder();

    @Select("select * from tbl_order where orderid = #{orderid}")
    Order getOrderByOrderId(Integer orderid);

    @Update("update tbl_order set sendername=#{sendername},senderphone=#{senderphone},senderaddress=#{senderaddress}," +
            "recipientname=#{recipientname},recipientphone=#{recipientphone},recipientaddress=#{recipientaddress}," +
            "message=#{message},status=#{status} where orderid=#{orderid}")
    void updateOrder(Order order);

    @Delete("delete from tbl_order where orderid=#{orderid}")
    void deleteByOrderid(Integer orderid);

    List<Order> findOrder(@Param("orderid") Integer orderid, @Param("sendername") String sendername, @Param("recipientname") String recipientname);

    @Insert("insert into tbl_order (orderid,sendername,senderphone,senderaddress,recipientname,recipientphone,recipientaddress,message,status)" +
            " values(#{orderid},#{sendername},#{senderphone},#{senderaddress},#{recipientname},#{recipientphone},#{recipientaddress},#{message},#{status})")
    void insertOrder(Order order);
}
