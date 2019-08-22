class AdditionByUsingMethodsWithParamsAndReturnWithAllMethods{

	public static void main(String[] args) {
		new AdditionByUsingMethodsWithParamsAndReturnWithAllMethods().input();
		
	}

	void add(int firstNum, int secondNum){
		int s=firstNum + secondNum;
		display(s);
	}

	void input(){
		java.util.Scanner scan = new java.util.Scanner(System.in);
		System.out.println("Enter 2 numbers");
		int firstNum = scan.nextInt();
		int secondNum = scan.nextInt();
		add(firstNum,secondNum);
	}

	void display(int s){
		System.out.println("Addition is: " + s);
	}






}