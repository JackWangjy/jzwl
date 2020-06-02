package com.it.mapper;

import com.it.domian.VipInfo;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;

import java.util.List;

@Mapper
public interface VipInfoMapper {

//    @Select("select * from tbl_user")
    //使用xml进行多表查询
    List<VipInfo> getAllUser();

    @Select("select * from tbl_vip_info where id=#{id}")
    @Results({
            @Result(id=true,column = "id",property = "id"),
            @Result(column = "name",property = "name"),
            @Result(column = "sex",property = "sex"),
            @Result(column = "phonenumber",property = "phonenumber"),
            @Result(column = "createtime",property = "createtime"),
            @Result(column = "vip_account_id" ,property="vipAccount",
            one=@One(
                    select = "com.it.mapper.AccountMapper.getAc",
                    fetchType = FetchType.EAGER))
    })
    VipInfo getUserById(Integer id);

    @SelectProvider(type= VipInfoDynaSqlProvider.class,method="addInfo")
    void addUser(VipInfo user);



    @Delete("delete from tbl_vip_info where id = #{id}")
    void deleteById(Integer id);

    @Delete("delete from tbl_vip_info where vip_account_id = #{id}")
    void deleteByAccountId(Integer id);

    @Select("select * from tbl_vip_info where vip_account_id = #{id}")
    VipInfo getInfo(Integer id);

    @Update("update tbl_vip_info set name=#{name},sex=#{sex},phonenumber=#{phonenumber} where id=#{id}")
    void updateUser(VipInfo info);
}
