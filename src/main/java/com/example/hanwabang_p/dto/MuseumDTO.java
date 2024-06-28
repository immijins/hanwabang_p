package com.example.hanwabang_p.dto;

import com.example.hanwabang.domain.Museum;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MuseumDTO {
    private Long no;

    @NotEmpty
    private String title;

    @NotEmpty
    private String content;

    private String imagePath;

    public MuseumDTO(Museum museum) {
        this.no = museum.getNo();
        this.title = museum.getTitle();
        this.content = museum.getContent();
        this.imagePath = museum.getImagePath();
    }
}
