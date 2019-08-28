package collectiondemo;

import java.util.Comparator;

public class SortByAddress implements Comparator<Human> {

	@Override
	public int compare(Human o1, Human o2) {
		if(o1.getAge() == o2.getAge()) {
			return o1.getAddress().compareTo(o2.getAddress());
		}
		return 0;
	}

}
