package com.example.duedate.diaryMapper;

import com.example.duedate.domain.diarydto.DiaryDTO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Slf4j
class DiaryMapperTest {

    @Autowired
    DiaryMapper diaryMapper;

    @Test
    void insertDiary() {
        DiaryDTO diaryDTO = new DiaryDTO();

        diaryDTO.setDiaryDate("2024-05-07");
        diaryDTO.setDiaryEmo("🍔");
        diaryDTO.setDiaryTitle("안녕하세요");
        diaryDTO.setDiaryContent("반값습니다");

        System.out.println(diaryDTO);
        System.out.println("insert 메소드 확인");

//        diaryMapper.insertDiary(diaryDTO);
    }

    @Test
    void updateDiary() {
        DiaryDTO diaryDTO = new DiaryDTO();

        diaryDTO.setDiaryEmo("🍔");
        diaryDTO.setDiaryTitle("안녕하세요");
        diaryDTO.setDiaryContent("반값습니다");

        System.out.println(diaryDTO);
        System.out.println("update 메소드 확인");
    }

    @Test
    void selectDiaryDetail() {
        DiaryDTO diaryDTO = new DiaryDTO();

        diaryDTO.getDiaryDate();
        diaryDTO.getDiaryEmo();
        diaryDTO.getDiaryTitle();
        diaryDTO.getDiaryContent();

        System.out.println("selectDiaryDetail method check");
    }

    @Test
    void deleteDiary() {

    }

    @Test
    void selectEmoAll() {

    }
}