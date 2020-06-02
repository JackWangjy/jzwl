package com.it.mapper;

import com.it.domian.Question;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface QuestionMapper {

    @Select("select * from tbl_questionandanswer where question like concat('%',#{question},'%')")
    List<Question> queryQuestionAndAnswer(String question);

    @Select("select * from tbl_questionandanswer where questionNumber = #{questionNumber}")
    Question queryOneQuestionAndAnswerByQuestionNumber(Integer questionNumber);

    @Select("select * from tbl_questionandanswer")
    List<Question> queryAllQuestionAndAnswer();

    @Delete("delete from tbl_questionandanswer where questionNumber = #{questionNumber}")
    Integer deletQuestionAndAnswer(Integer questionNumber);

    @Insert("insert into tbl_questionandanswer(questionNumber,question,answer) values(#{questionNumber},#{question},#{answer})")
    Integer addQuestionAndAnswer(Question questionAndAnswer);

    @Update("update tbl_questionandanswer set question = #{question} where questionNumber = #{questionNumber}")
    Integer updateQuestionAndAnswerQuestion(@Param("questionNumber") Integer questionNumber, @Param("question") String question);

    @Update("update tbl_questionandanswer set answer = #{answer} where questionNumber = #{questionNumber}")
    Integer updateQuestionAndAnswerAnswer(@Param("questionNumber") Integer questionNumber, @Param("answer") String answer);
}
