package com.example.duedate.repository;

import com.example.duedate.domain.diarydto.DiaryDTO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Slf4j
class DiaryDAOTest {

    @Autowired
    DiaryDAO diaryDAO;

    @Test
    void testInsertDiary() {
        DiaryDTO diaryDTO = new DiaryDTO();

        diaryDTO.setDiaryDate("2024-05-05");
        diaryDTO.setDiaryEmo("🍔");
        diaryDTO.setDiaryTitle("hello");
        diaryDTO.setDiaryContent("hi");

        System.out.println(diaryDTO);


//        diaryDAO.insertDiary(diaryDTO);
    }

    @Test
    void updateDiary() {
    }

    @Test
    void selectDiaryDetail() {
    }

    @Test
    void deleteDiary() {
    }

    @Test
    void selectEmoAll() {
    }
}