package com.it.domian;

import java.io.Serializable;

public class Message implements Serializable {

    private  Integer id;
    private String message;
    private String time;
    private String author;

    public Message(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Override
    public String toString() {
        return "Message{" +
                "id=" + id +
                ", message='" + message + '\'' +
                ", time='" + time + '\'' +
                ", author='" + author + '\'' +
                '}';
    }
}
