package com.example.duedate.domain.dto;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Data
public class CommentDTO {
    private Long commentId;
    private Long postId;
    private Long userNumber;
    private String commentContent;
    private LocalDateTime commentRigisterDate; // 생성시간
    private LocalDateTime commentUpdateDate; //수정시간
    private String name; //사용자이름
    private String nicName;
    private String userPic; // 프로필사진 url
    private String providerId; //제공자 아이디 값
}
