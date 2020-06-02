package com.it.domian;

import java.io.Serializable;

public class AddressBook implements Serializable {

    private Integer id;
    private String name;
    private String phone;
    private String address;
    private VipAccount vipAccount;

    public AddressBook(){}

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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public VipAccount getVipAccount() {
        return vipAccount;
    }

    public void setVipAccount(VipAccount vipAccount) {
        this.vipAccount = vipAccount;
    }

    @Override
    public String toString() {
        return "AddressBook{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", address='" + address + '\'' +
                ", vipAccount=" + vipAccount +
                '}';
    }
}
