package com.it.mapper;

import com.it.domian.VipAccount;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface AccountMapper {

    @Select("select * from tbl_vip_account where username=#{username}")
    VipAccount login(@Param("username") String username);

    @Select("select * from tbl_vip_account where id=#{id}")
    VipAccount getAc(Integer id);

    @Select("select * from tbl_vip_account")
    List<VipAccount> getAllAccount();

    @Insert("insert into tbl_vip_account(username,password) values(#{username},#{password})")
    void addAccount(VipAccount account);

    @Delete("delete from tbl_vip_account where id=#{id}")
    void deleteAccountById(Integer id);

    @Update("update tbl_account set username=#{username},password=#{password} where id=#{id}")
    void updateAccount(VipAccount account);

    @Select("select count(*) from tbl_vip_account where username = #{username}")
    int countName(String username);
}
