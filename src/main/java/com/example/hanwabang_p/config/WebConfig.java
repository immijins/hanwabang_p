package com.example.hanwabang_p.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    // 리액트와 연동을 위해 CORS 설정
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // 리액트 앱의 주소
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }

    @Value("${upload.path1}")
    private String uploadPath1;

    @Value("${upload.path2}")
    private String uploadPath2;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/admin/museum/images/**")
                .addResourceLocations("file:///" + uploadPath1 + "/");
    }
}
