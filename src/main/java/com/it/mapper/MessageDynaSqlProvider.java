package com.it.mapper;

import com.it.domian.Message;

import org.apache.ibatis.jdbc.SQL;

public class MessageDynaSqlProvider {

    //动态插入
    public String addMessage(Message message) {
        return new SQL() {
            {
                INSERT_INTO("tbl_message");
                if(message.getMessage()!=null) {
                    VALUES("message","#{message}");
                }
                if(message.getTime()!=null) {
                    VALUES("time","#{time}");
                }
                if(message.getAuthor()!=null) {
                    VALUES("author","#{author}");
                }
            }
        }.toString();
    }
}
