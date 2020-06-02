package com.it.domian;

public class VipAccount {
    private Integer id;
    private String username;
    private String password;
    private Integer readable;

    public VipAccount() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getReadable() {
        return readable;
    }

    public void setReadable(Integer readable) {
        this.readable = readable;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", readable='" + readable + '\'' +
                '}';
    }
}
