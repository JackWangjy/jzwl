package com.it.mapper;

import com.it.domian.Website;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface WebsiteMapper {

    /**
     *管理员端的操作
     */
//    @Select("select * from tbl_website")
//    List<Website> getAllWebsite();
//
//    @Delete("delete from tbl_website where id = #{id}")
//    void deleteWebsite(Integer id);
//
//    @Insert("insert into tbl_website(name,number,address,phone,time) values(#{name},#{number},#{address},#{phone},#{time})")
//    void addWebsite(Website website);
//
//    @Update("update tbl_website set name=#{name},number=#{number},address=#{address},phone=#{phone},time=#{time} where id=#{id}")
//    void updateWebsite(Website website);

    /**
     * 用户端操作
     */
    @Select("select * from tbl_website where address like CONCAT('%',#{province},'%') and address like CONCAT('%',#{school},'%') and address like CONCAT('%',#{yuanqu},'%') ")
//    @Select("select * from tbl_website where address like #{address}")
    List<Website> queryWebsite(@Param("province") String province, @Param("school") String school, @Param("yuanqu") String yuanqu);
}
