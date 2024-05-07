package com.example.duedate.mapper;

import com.example.duedate.domain.dto.PostsDTO;
import com.example.duedate.domain.vo.PostVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PostMapper {
    Long getSeq();
//    게시글 추가
    void insertPost(PostVO postVO);

//    특정 게시글 상세보기
    PostsDTO selectPostDetail(Long postId);

//    게시글 업데이트
    void updatePost(PostVO postVO);

//    조회수 업데이트

    void plusViews(long postId);

//    특정 게시글 삭제
    void deletePost(long postId);

//    게시글 목록 조회
    List<PostsDTO> selectAll();

}
