package com.collections_day3;

public class Subjects {
	
	private String subjectName;
	private int subjectMark;
	private int subjectClassNo;
	
	public Subjects(String subjectName, int subjectMark, int subjectClassNo) {
		super();
		this.subjectName = subjectName;
		this.subjectMark = subjectMark;
		this.subjectClassNo = subjectClassNo;
	}

	public String getSubjectName() {
		return subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	public int getSubjectMark() {
		return subjectMark;
	}

	public void setSubjectMark(int subjectMark) {
		this.subjectMark = subjectMark;
	}

	public int getSubjectClassNo() {
		return subjectClassNo;
	}

	public void setSubjectClassNo(int subjectClassNo) {
		this.subjectClassNo = subjectClassNo;
	}

	@Override
	public String toString() {
		return "Subjects [subjectName=" + subjectName + ", subjectMark=" + subjectMark + ", subjectClassNo="
				+ subjectClassNo + "]";
	}
	

}
