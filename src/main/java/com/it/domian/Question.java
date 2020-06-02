package com.it.domian;

import java.io.Serializable;

public class Question implements Serializable {
	
	private int questionNumber;
	private String question;
	private String answer;
	
	public Question(){}

	public Question(int questionNumber, String question, String answer) {
		this.questionNumber = questionNumber;
		this.question = question;
		this.answer = answer;
	}

	public int getQuestionNumber() {
		return questionNumber;
	}

	public void setQuestionNumber(int questionNumber) {
		this.questionNumber = questionNumber;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	@Override
	public String toString() {
		return "QuestionAndAnswer [questionNumber=" + questionNumber
				+ ", question=" + question + ", answer=" + answer + "]";
	}
}
