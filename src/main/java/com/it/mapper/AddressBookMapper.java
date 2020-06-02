package com.it.mapper;

import com.it.domian.AddressBook;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface AddressBookMapper {

    @Select("select * from tbl_addressbook where vip_account_id = #{id}")
    List<AddressBook> getMyAddressBook(Integer id);

    @Insert("insert into tbl_addressbook (name,phone,address,vip_account_id) values(#{name},#{phone},#{address},#{vipAccount.id})")
    void insertAddressBook(AddressBook addressBook);

    @Delete("delete from tbl_addressbook where id=#{id}")
    void deleteaddress(Integer id);

    @Update("update tbl_addressbook set name=#{name},phone=#{phone},address=#{address} where id=#{id}")
    void updateAddress(AddressBook addressBook);

    @Select("select count(*) from tbl_addressbook where vip_account_id = #{id}")
    int totalAddress(Integer id);
}
