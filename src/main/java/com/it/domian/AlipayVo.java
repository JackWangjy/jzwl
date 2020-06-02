package com.it.domian;

public class AlipayVo {
    private String id;
    private String name;
    private double money;

    public AlipayVo(String id, double money, String name) {
        this.id = id;
        this.money = money;
        this.name = name;
    }

    public AlipayVo() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public double getMoney() {
        return money;
    }

    public void setMoney(double money) {
        this.money = money;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;

    }
}
