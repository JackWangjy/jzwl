package com.it;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@MapperScan("com.it.mapper")
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class JzwlApplication {

    public static void main(String[] args) {
        SpringApplication.run(JzwlApplication.class, args);
    }

}
