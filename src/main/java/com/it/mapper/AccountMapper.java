package com.it.mapper;

import com.it.domian.Account;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface AccountMapper {

    @Select("select * from tbl_account where username=#{username} and password=#{password}")
    Account login(@Param("username") String username, @Param("password") String password);

    @Select("select * from tbl_account where id=#{id}")
    Account getAc(Integer id);

    @Select("select * from tbl_account")
    List<Account> getAllAccount();

    @Insert("insert into tbl_account(username,password) values(#{username},#{password})")
    void addAccount(Account account);

    @Delete("delete from tbl_account where id=#{id}")
    void deleteAccountById(Integer id);

    @Update("update tbl_account set username=#{username},password=#{password} where id=#{id}")
    void updateAccount(Account account);
}
