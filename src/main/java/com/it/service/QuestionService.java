package com.it.service;

import com.github.pagehelper.PageInfo;
import com.it.domian.Question;

public interface QuestionService {

    PageInfo<Question> queryQuestionAndAnswer(String question, Integer currentPage, Integer pageSize);

    Question queryOneQuestionAndAnswerByQuestionNumber(Integer questionNumber);

    PageInfo<Question> queryAllQuestionAndAnswer(Integer currentPage, Integer pageSize);

    Integer deletQuestionAndAnswer(Integer questionNumber);

    Integer addQuestionAndAnswer(Question question);

    Integer updateQuestionAndAnswerQuestion(Integer questionNumber, String question);

    Integer updateQuestionAndAnswerAnswer(Integer questionNumber, String answer);
}
