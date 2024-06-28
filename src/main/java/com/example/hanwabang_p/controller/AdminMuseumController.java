package com.example.hanwabang_p.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@Log4j2
@RequestMapping("/admin/museum")
@RequiredArgsConstructor // 생성자 자동 실행
public class AdminMuseumController {
    private final MuseumService museumService;

    // 박물관 페이지
    // 목록
    @GetMapping("/list")
    public String adminMuseum(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "size", defaultValue = "10") int size,
            Model model) {

        MPageRequestDTO mPageRequestDTO = MPageRequestDTO.builder()
                .page(page)
                .size(size)
                .build();

        MPageResponseDTO<MuseumDTO> mPageResponseDTO = museumService.list(mPageRequestDTO);
        model.addAttribute("museumDTO", mPageResponseDTO);

        return "admin/museum/list";
    }

    // 읽기
    @GetMapping("/read")
    public void read(Long no, Model model) {
        MuseumDTO museumDTO = museumService.readOne(no);
        log.info(museumDTO);
        model.addAttribute("dto", museumDTO);
    }

    // 생성


    // 수정


    // 삭제
}
