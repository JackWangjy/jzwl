package com.it.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.it.domian.Question;
import com.it.mapper.QuestionMapper;
import com.it.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {


    @Autowired
    private QuestionMapper questionMapper;

    @Override
    public PageInfo<Question> queryQuestionAndAnswer(String question, Integer currentPage, Integer pageSize) {
        PageHelper.startPage(currentPage,pageSize);
        List<Question> questionAndAnswers=questionMapper.queryQuestionAndAnswer(question);
        return new PageInfo<Question>(questionAndAnswers);
    }

    @Override
    public Question queryOneQuestionAndAnswerByQuestionNumber(Integer questionNumber) {
        return questionMapper.queryOneQuestionAndAnswerByQuestionNumber(questionNumber);
    }

    @Override
    public PageInfo<Question> queryAllQuestionAndAnswer(Integer currentPage,Integer pageSize) {
        PageHelper.startPage(currentPage,pageSize);
        List<Question> questionAndAnswers=questionMapper.queryAllQuestionAndAnswer();
        return new PageInfo<Question>(questionAndAnswers);
    }

    @Override
    public Integer deletQuestionAndAnswer(Integer questionNumber) {
        return questionMapper.deletQuestionAndAnswer(questionNumber);
    }

    @Override
    public Integer addQuestionAndAnswer(Question question) {
        return questionMapper.addQuestionAndAnswer(question);
    }

    @Override
    public Integer updateQuestionAndAnswerQuestion(Integer questionNumber,String question) {
        return questionMapper.updateQuestionAndAnswerQuestion(questionNumber, question);
    }

    @Override
    public Integer updateQuestionAndAnswerAnswer(Integer questionNumber,String answer) {
        return questionMapper.updateQuestionAndAnswerAnswer(questionNumber, answer);
    }
}
