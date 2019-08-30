package com.collections_day3;

import java.util.ArrayList;
import java.util.List;

public class Classes {
	
	private int classNo;
	private String className;
	private List<Subjects> subjects = new ArrayList<Subjects>();
	
	
	public Classes(int classNo, String className, List<Subjects> subjects) {
		super();
		this.classNo = classNo;
		this.className = className;
		this.subjects = subjects;
	}
	
	
	public int getClassNo() {
		return classNo;
	}
	public void setClassNo(int classNo) {
		this.classNo = classNo;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public List<Subjects> getSubjects() {
		return subjects;
	}
	public void setSubjects(List<Subjects> subjects) {
		this.subjects = subjects;
	}


	@Override
	public String toString() {
		return "Classes [classNo=" + classNo + ", className=" + className + ", subjects=" + subjects + "]";
	}

}
