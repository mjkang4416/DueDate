package com.example.duedate.service;

import com.example.duedate.domain.dto.PostsDTO;
import com.example.duedate.domain.vo.PostVO;
import com.example.duedate.domain.vo.UserVO;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public interface PostService {

    void insertPost(PostVO postVO);

    //    특정 게시글 상세보기
    PostsDTO selectPostDetail(Long postId, UserVO userVO);

    //    게시글 업데이트
    void updatePost(PostVO postVO);


    //    특정 게시글 삭제
    void deletePost(long postId);

    //    게시글 목록 조회
    List<PostsDTO> selectAll();


}
