package com.example.duedate.domain.dto;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Data
public class PostsDTO {
        private Long postId;
        private Long userNumber;
        private String userNicName;
        private String userId;
        private String postTitle;
        private String postContent;
        private int postViews;
        private LocalDateTime postDate;
        private LocalDateTime postUpdateDate;

        private int fileCount;
        private String userPic;
//        private String providerId; 소셜로그인 미정(?)
}
