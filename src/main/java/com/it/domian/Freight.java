package com.it.domian;

import java.io.Serializable;

public class Freight implements Serializable {

    private Integer id;
    private String start;
    private String end;
    private double time;
    private double price;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public double getTime() {
        return time;
    }

    public void setTime(double time) {
        this.time = time;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Freight{" +
                "id=" + id +
                ", start='" + start + '\'' +
                ", end='" + end + '\'' +
                ", time=" + time +
                ", price=" + price +
                '}';
    }
}
