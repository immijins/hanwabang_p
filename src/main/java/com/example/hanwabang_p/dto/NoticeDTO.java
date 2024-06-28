package com.example.hanwabang_p.dto;

import com.example.hanwabang.domain.Notice;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NoticeDTO {
    private Long no;

    @NotEmpty
    private String title;

    @NotEmpty
    private String content;

    private String imagePath;

    private LocalDate regDate;
    private LocalDate modDate;

    public NoticeDTO(Notice notice) {
        this.no = notice.getNo();
        this.title = notice.getTitle();
        this.content = notice.getContent();
        this.imagePath = notice.getImagePath();
        this.regDate = notice.getRegDate();
        this.modDate = notice.getModDate();
    }
}
