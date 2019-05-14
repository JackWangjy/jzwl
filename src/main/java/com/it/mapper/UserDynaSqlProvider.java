package com.it.mapper;

import com.it.domian.User;
import org.apache.ibatis.jdbc.SQL;

public class UserDynaSqlProvider {
    //动态插入
    public String addUser(User user) {
        return new SQL() {
            {
                INSERT_INTO("tbl_user");
                if(user.getName()!=null) {
                    VALUES("name","#{name}");
                }
                if(user.getSex()!=null) {
                    VALUES("sex","#{sex}");
                }
                if(user.getPhone()!=null) {
                    VALUES("phone","#{phone}");
                }
                if(user.getShenfen()!=null) {
                    VALUES("shenfen","#{shenfen}");
                }
                if(user.getAccount()!=null){
                    VALUES("account_id","#{account.id}");
                }

            }
        }.toString();
    }
}
