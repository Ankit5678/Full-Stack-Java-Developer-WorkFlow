package collectiondemo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ListMain {
	
	public void compare() {
		List<Human> l = new ArrayList<Human>();
		
		l.add(new Human(1,22,"Alok","Odisha"));
		l.add(new Human(2,23,"Satwindar","Panjab"));
		l.add(new Human(3,21,"Aditya","Kerla"));
		l.add(new Human(4,20,"Harish","Bihar"));
		l.add(new Human(5,22,"Alak","Mp"));
		
		System.out.println("Before Sorting:");
		
		for(Human h:l) {
			System.out.println(h);
		}
		
		System.out.println("================================================");
		System.out.println("After Sorting:");
		
		SortByAge sortByAge = new SortByAge();
		
		Collections.sort(l,sortByAge);
		
		for(Human h:l) {
			System.out.println(h);
		}
		
		List<Human> age_sorted = new ArrayList<Human>();
		for(Human h:l) {
			age_sorted.add(h);
		}
		System.out.println("New List"+"\n"+"===============");
		for(Human h:age_sorted) {
			System.out.println(h);
		}
		
		SortByAddress sortByAddress = new SortByAddress();
		
		Collections.sort(age_sorted,sortByAddress);
		
		System.out.println("================================================");
		System.out.println("After Sorting:");
		
		for(Human h:age_sorted) {
			System.out.println(h);
		}
		
	}
	public static void main(String[] args) {
		ListMain lm = new ListMain();
		lm.compare();
	}

}
