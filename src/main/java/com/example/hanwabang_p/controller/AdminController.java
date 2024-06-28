package com.example.hanwabang_p.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Log4j2
@RequestMapping("/admin")
@RequiredArgsConstructor // 생성자 자동 실행
public class AdminController {
    // 로그인
    @GetMapping("/login")
    public String login() {
        return "admin/login";
    }

    // 관리자 메인
    @GetMapping("/main")
    public String adminMain() {
        return "admin/main";
    }
}
