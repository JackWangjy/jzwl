package com.it.domian;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

public class VipInfo implements Serializable {

    private Integer id;
    private String name;
    private String sex;
    private String phonenumber;
    private String createtime;
    private VipAccount vipAccount;

    public VipInfo(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.createtime = simpleDateFormat.format(createtime);

    }

    public VipAccount getVipAccount() {
        return vipAccount;
    }

    public void setVipAccount(VipAccount vipAccount) {
        this.vipAccount = vipAccount;
    }

    @Override
    public String toString() {
        return "VipInfo{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", phonenumber='" + phonenumber + '\'' +
                ", createtime='" + createtime + '\'' +
                ", vipAccount=" + vipAccount +
                '}';
    }
}