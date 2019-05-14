package com.it.mapper;

import com.it.domian.Message;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;

import java.util.List;

public interface MessageMapper {

    @SelectProvider(type = MessageDynaSqlProvider.class,method = "addMessage")
    void addMessage(Message message);

    @Select("select * from tbl_message")
    List<Message> getMessage();

    @Delete("delete from tbl_message where id = #{id}")
    void deleteMessageById(Integer id);
}
