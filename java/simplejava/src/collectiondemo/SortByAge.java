package collectiondemo;

import java.util.Comparator;

public class SortByAge implements Comparator<Human> {

	@Override
	public int compare(Human o1, Human o2) {
		if(o1.getAge() > o2.getAge())
			return 1;
		else if(o1.getAge() < o2.getAge())
			return -1;
		else
			return 0;
	}

}
