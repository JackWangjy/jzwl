package com.it.mapper;

import com.it.domian.VipInfo;
import org.apache.ibatis.jdbc.SQL;

public class VipInfoDynaSqlProvider {
    //动态插入
    public String addInfo(VipInfo vipInfo) {
        return new SQL() {
            {
                INSERT_INTO("tbl_vip_info");
                if(vipInfo.getName()!=null) {
                    VALUES("name","#{name}");
                }
                if(vipInfo.getSex()!=null) {
                    VALUES("sex","#{sex}");
                }
                if(vipInfo.getPhonenumber()!=null) {
                    VALUES("phonenumber","#{phonenumber}");
                }
                if(vipInfo.getCreatetime()!=null) {
                    VALUES("createtime","#{createtime}");
                }
                if(vipInfo.getVipAccount()!=null){
                    VALUES("vip_account_id","#{vipAccount.id}");
                }

            }
        }.toString();
    }
}
