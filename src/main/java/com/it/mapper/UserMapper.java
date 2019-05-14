package com.it.mapper;

import com.it.domian.User;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;

import java.util.List;

@Mapper
public interface UserMapper {

//    @Select("select * from tbl_user")
    //使用xml进行多表查询
    List<User> getAllUser();

    @Select("select * from tbl_user where id=#{id}")
    @Results({
            @Result(id=true,column = "id",property = "id"),
            @Result(column = "name",property = "name"),
            @Result(column = "sex",property = "sex"),
            @Result(column = "phone",property = "phone"),
            @Result(column = "shenfen",property = "shenfen"),
            @Result(column = "account_id" ,property="account",
            one=@One(
                    select = "com.it.bootstrapmanagement.mapper.AccountMapper.getAc",
                    fetchType = FetchType.EAGER))
    })
    User getUserById(Integer id);

    @SelectProvider(type=UserDynaSqlProvider.class,method="addUser")
    void addUser(User user);

    @Select("select * from tbl_user where shenfen = #{shenfen}")
    List<User> getAllShenfen(String shenfen);

    @Delete("delete from tbl_user where id = #{id}")
    void deleteById(Integer id);

    @Delete("delete from tbl_user where account_id = #{id}")
    void deleteByAccountId(Integer id);

    @Update("update tbl_user set name=#{name},sex=#{sex},phone=#{phone},shenfen=#{shenfen} where id=#{id}")
    void updateUser(User user);
}
