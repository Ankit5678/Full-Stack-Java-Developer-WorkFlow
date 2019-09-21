import java.util.*;

class Super{
	void comparator(int legcount,int handcount){

	}
}

class Category extends Super{


	class Human extends Super{
		void comparator(int legcount,int handcount){
			if(legcount==2 && handcount==2){
				System.out.println("Human");
			}	
		}
	}

	class Animal extends Super{
		void comparator(int legcount,int handcount){
			if(legcount==4 && handcount==0){
				System.out.println("Animal");
			}
		}
	}

	// class EnglishHuman{

	// }
}

class MainComparator{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter number of legs:  ");
		int legcount = sc.nextInt();
		System.out.println("Enter number of hands: ");
		int handcount = sc.nextInt();

		Category c = new Category();
		Super[] arr = new Super[2];
		arr[0] = c.new Human();
		arr[1] = c.new Animal();
		for(int i=0;i<arr.length;i++){
			arr[i].comparator(legcount,handcount);
		}
	}
}