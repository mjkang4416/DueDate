package com.example.duedate.repository;

import com.example.duedate.mapper.DiaryMapper;
import com.example.duedate.domain.dto.DiaryDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class DiaryDAO {

    private final DiaryMapper diaryMapper;

    public void insertDiary(DiaryDTO diaryDTO){
        diaryMapper.insertDiary(diaryDTO);
    }

    public void updateDiary(DiaryDTO diaryDTO){
        diaryMapper.updateDiary(diaryDTO);
    }

    public DiaryDTO selectDiaryDetail(long diaryId){
        return diaryMapper.selectDiaryDetail(diaryId);
    }

    public void deleteDiary(long diaryId){
        diaryMapper.deleteDiary(diaryId);
    }

    public List<DiaryDTO> selectEmoAll(){
        return diaryMapper.selectEmoAll();
    }
}
