package com.collections_day3;

import java.util.Comparator;

public class SortByGrade implements Comparator<Students>{

	@Override
	public int compare(Students obj1, Students obj2) {
		return obj1.getStudentGrade().compareTo(obj2.getStudentGrade());
	}

}
