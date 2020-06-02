package com.it.mapper;

import com.it.domian.Freight;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface FreightMapper {

    @Select("select * from tbl_freight where start=#{start} and end=#{end}")
    Freight getFre(@Param("start") String start, @Param("end") String end);
}
