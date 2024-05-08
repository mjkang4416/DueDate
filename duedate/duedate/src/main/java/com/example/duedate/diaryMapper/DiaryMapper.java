package com.example.duedate.diaryMapper;

import com.example.duedate.domain.diarydto.DiaryDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DiaryMapper {

//    일기 작성
    void insertDiary(DiaryDTO diaryDTO);

//    일기 수정
    void updateDiary(DiaryDTO diaryDTO);

//    일기 보기
    DiaryDTO selectDiaryDetail(long diaryId);

//    일기 삭제
    void deleteDiary(Long diaryId);

//    이모티콘 불러오기
    List<DiaryDTO> selectEmoAll();
}
