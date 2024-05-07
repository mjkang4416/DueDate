package com.example.duedate.domain.vo;

import lombok.Data;

import java.time.LocalDate;

@Data
public class UserVO {
    private Long userNumber;
    private String username;
    private String userNicName;
    private String userPhoneNumber;
    private String userId;
    private String userPassword;
    private String userPic;
    private LocalDate userBirthday;
}
