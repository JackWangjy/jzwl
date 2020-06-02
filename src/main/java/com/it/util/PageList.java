package com.it.util;

import java.util.List;

public class PageList<T> {
	
	private String code;
	private String msg;
	private long count;
	private List data;
	
	public PageList() {
		this.code = "0";
		this.msg = "";
	}

	public PageList(String code, String msg, long count, List data) {
		this.code = code;
		this.msg = msg;
		this.count = count;
		this.data = data;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public long getCount() {
		return count;
	}

	public void setCount(long count) {
		this.count = count;
	}

	public List getData() {
		return data;
	}

	public void setData(List data) {
		this.data = data;
	}
}
