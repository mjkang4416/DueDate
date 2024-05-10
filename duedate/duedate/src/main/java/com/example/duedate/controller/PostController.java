package com.example.duedate.controller;

import com.example.duedate.domain.dto.PostsDTO;
import com.example.duedate.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/community_html")
public class PostController {

        private final PostService postService;

        @GetMapping("/communitypage")
        public String communitypage(PostsDTO postsDTO) {
            postService.selectAll();
            return "/community_html/communitypage";
        }


}
