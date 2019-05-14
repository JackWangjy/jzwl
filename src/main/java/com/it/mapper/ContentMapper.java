package com.it.mapper;

import com.it.domian.Content;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ContentMapper {

    @Select("select * from tbl_content")
    List<Content> getAllContent();

    @Insert("insert into tbl_content(phone,content,author,time) values(#{phone},#{content},#{author},#{time})")
    void addContent(Content content);

//    @Delete("delete from tbl_content where id=#{id}")
//    void deleteContentById(Integer id);
//
//    @Update("update tbl_content set phone=#{phone},content=#{content},author=#{author} where id=#{id}")
//    void updateContent(Content content);
}
