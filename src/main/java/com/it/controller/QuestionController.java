package com.it.controller;

import com.github.pagehelper.PageInfo;
import com.it.domian.Question;
import com.it.service.QuestionService;
import com.it.util.PageList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class QuestionController {

    @Autowired
    private QuestionService questionService;


    @RequestMapping(value="/questionQueryQuestion")
    public PageList<Question> queryQuestion(String question, int page, int limit, HttpSession session)
    {
        PageList<Question> pageList = new PageList<Question>();

        if(question==null)//问题关键字为空
        {
            PageInfo<Question> pageInfo=questionService.queryAllQuestionAndAnswer(page, limit);
            pageList.setCount(pageInfo.getTotal());
            pageList.setData(pageInfo.getList());
            return pageList;
        }
        else
        {
            PageInfo<Question> pageInfo=questionService.queryQuestionAndAnswer(question,page,limit);

            if(pageInfo.getList().size()==0)//没有查出匹配的对象
            {
                Question questionAndAnswer=new Question(-1,"抱歉，没有找到相关信息","很抱歉，我们暂时无相关信息，请您重新搜索");
                pageInfo.getList().add(questionAndAnswer);
                pageList.setCount(1);
            }
            else
                pageList.setCount(pageInfo.getTotal());

            pageList.setData(pageInfo.getList());
            return pageList;
        }
    }



}
