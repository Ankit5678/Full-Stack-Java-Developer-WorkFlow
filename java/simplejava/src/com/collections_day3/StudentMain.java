package com.collections_day3;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import collectiondemo.Human;
import collectiondemo.SortByAge;

public class StudentMain {

	public static void main(String[] args) {
		StudentMain obj = new StudentMain();
		obj.studentWithHighestGrade();
		obj.studentWithHighestGradeInClass();

	}

	private void studentWithHighestGradeInClass() {
		List<Students> students = new ArrayList<Students>();
		
		students.add(new Students(10,"Ankit","A", new Classes(1,"FSD", 
				Arrays.asList(new Subjects("java", 90, 1),new Subjects("JavaScript", 80, 1))
			)));
		
		students.add(new Students(11,"Bob","B", new Classes(1,"FSD", 
				Arrays.asList(new Subjects("java", 80, 1),new Subjects("JavaScript", 70, 1))
			)));
		
		students.add(new Students(12,"Harish","A", new Classes(2,"UI", 
				Arrays.asList(new Subjects("html", 70, 1),new Subjects("Css", 60, 1))
			)));
		
		System.out.println("Before Sorting:");
		
		for(Students s:students) {
			System.out.println(s);
		}
	}

	private void studentWithHighestGrade() {
		
		List<Students> students = new ArrayList<Students>();
		
		students.add(new Students(10,"Ankit","A", new Classes(1,"FSD", 
				Arrays.asList(new Subjects("java", 90, 1),new Subjects("JavaScript", 80, 1))
			)));
		
		students.add(new Students(11,"Bob","B", new Classes(1,"FSD", 
				Arrays.asList(new Subjects("java", 80, 1),new Subjects("JavaScript", 70, 1))
			)));
		
		students.add(new Students(12,"Harish","A", new Classes(1,"FSD", 
				Arrays.asList(new Subjects("java", 70, 1),new Subjects("JavaScript", 60, 1))
			)));
		
		System.out.println("Before Sorting:");
		
		for(Students s:students) {
			System.out.println(s);
		}
		
		System.out.println("================================================");
		System.out.println("After Sorting:");
		
		SortByGrade sortByGrade = new SortByGrade();
		Collections.sort(students,sortByGrade);
		
		List<Students> studentWithHighestGrade = new ArrayList<Students>();
		String tempG = students.get(0).getStudentGrade();
		for(Students s:students) {
			if(s.getStudentGrade().equals(tempG)) {
				studentWithHighestGrade.add(s);
			}
		}
		
		System.out.println("================================================");
		System.out.println("Students with heightest grades:  ");
		for(Students s:studentWithHighestGrade) {
			System.out.println(s);
		}
	}

}
