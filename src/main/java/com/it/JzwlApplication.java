package com.it;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.it.mapper")
@SpringBootApplication
public class JzwlApplication {

    public static void main(String[] args) {
        SpringApplication.run(JzwlApplication.class, args);
    }

}
