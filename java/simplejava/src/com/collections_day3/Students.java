package com.collections_day3;

public class Students {
	
	private int studentId;
	private String StudentName;
	private String studentGrade;
	private Classes studentClass;
	
	
	public Students(int studentId, String studentName, String studentGrade, Classes studentClass) {
		super();
		this.studentId = studentId;
		StudentName = studentName;
		this.studentGrade = studentGrade;
		this.studentClass = studentClass;
	}


	public int getStudentId() {
		return studentId;
	}


	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}


	public String getStudentName() {
		return StudentName;
	}


	public void setStudentName(String studentName) {
		StudentName = studentName;
	}


	public String getStudentGrade() {
		return studentGrade;
	}


	public void setStudentGrade(String studentGrade) {
		this.studentGrade = studentGrade;
	}


	@Override
	public String toString() {
		return "Students [studentId=" + studentId + ", StudentName=" + StudentName + ", studentGrade=" + studentGrade
				+ ", studentClass=" + studentClass + "]";
	}


	public Classes getStudentClass() {
		return studentClass;
	}


	public void setStudentClass(Classes studentClass) {
		this.studentClass = studentClass;
	}

}
