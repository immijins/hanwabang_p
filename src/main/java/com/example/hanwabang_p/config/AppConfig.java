package com.example.hanwabang_p.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.File;

@Configuration
public class AppConfig {
    @Value("${upload.path1}")
    private String uploadPath1;

    @Value("${upload.path2}")
    private String uploadPath2;

//    @PostConstruct
//    public void init() {
//        File uploadDir1 = new File(uploadPath1);
//        File uploadDir2 = new File(uploadPath2);
//
//        if (!uploadDir1.exists()) {
//            uploadDir1.mkdirs();
//        }
//
//        if (!uploadDir2.exists()) {
//            uploadDir2.mkdirs();
//        }
//
//        uploadPath1 = uploadDir1.getAbsolutePath();
//        uploadPath2 = uploadDir2.getAbsolutePath();
//    }

    @Bean
    CommandLineRunner init() {
        return args -> {
            File uploadDir1 = new File(uploadPath1);
            File uploadDir2 = new File(uploadPath2);

            // 폴더가 없을 경우 생성
            if (!uploadDir1.exists()) {
                uploadDir1.mkdirs();
            }

            if (!uploadDir2.exists()) {
                uploadDir2.mkdirs();
            }
        };
    }
}