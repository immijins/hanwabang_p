package com.example.hanwabang_p.controller;

import com.example.hanwabang.domain.Notice;
import com.example.hanwabang.dto.NoticeDTO;
import com.example.hanwabang.service.NoticeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Log4j2
@RequiredArgsConstructor
public class NoticeController {
    private final NoticeService noticeService;

    // 공지사항 : 읽기 - 게시글 리스트 페이지 -- 데이터를 리액트로 전달
    @GetMapping("/notice")
    @ResponseBody
    public List<Notice> NoticeList() {
        // 모든 데이터 가져오기
        List<Notice> noticeList = noticeService.findAll();
        log.info(noticeList);
        return noticeList;
    }

    // 공지사항 : 개별 읽기 -- noticeDetail.js 페이지로 전달
    @GetMapping("/notice/{no}")
    public ResponseEntity<NoticeDTO> read(@PathVariable Long no) {
        NoticeDTO noticeDTO = noticeService.readOne(no);
        if (noticeDTO != null) {
            return ResponseEntity.ok(noticeDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
