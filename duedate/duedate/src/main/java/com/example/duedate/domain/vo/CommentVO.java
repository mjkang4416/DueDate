package com.example.duedate.domain.vo;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CommentVO {
    private Long commentId;
    private Long boardId;
    private String providerId;
    private String commentContent;
    private LocalDateTime commentRegisterDate;
    private LocalDateTime commentUpdateDate;
}
