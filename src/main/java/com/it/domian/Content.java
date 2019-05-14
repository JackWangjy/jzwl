package com.it.domian;

import java.io.Serializable;

public class Content implements Serializable {
    private Integer id;//id
    private String phone;
    private String content;
    private String author;
    private String time;

    public Content(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return "Content{" +
                "id=" + id +
                ", phone='" + phone + '\'' +
                ", content='" + content + '\'' +
                ", author='" + author + '\'' +
                ", time='" + time + '\'' +
                '}';
    }
}
