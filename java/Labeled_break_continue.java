class Labeled_Break_Continue{
	public static void main(String[] args) {
		for(int i=1;i<=5;i++){
			System.out.println("inside the 1st for loop  "+i);
			for(int j=1;j<=3;j++){
				System.out.println("inside 2nd for loop  "+j);
				break;
			}
		}
		System.out.println("==========================================");
		con:
		for(int i=1;i<=5;i++){
			System.out.println("inside the 1st for loop  "+i);
			for(int j=1;j<=3;j++){
				System.out.println("inside 2nd for loop  "+j);
				break con;
			}
		}

		System.out.println("==========================================");

		con:
		for(int i=1;i<=5;i++){
			System.out.println("inside the 1st for loop  "+i);
			for(int j=1;j<=3;j++){
				System.out.println("inside 2nd for loop  "+j);
				if(j==2)
					continue con;
			}
		}
	}
}