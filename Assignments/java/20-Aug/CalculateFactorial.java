//Write a java program that calculates factorial of a number entered at runtime

class CalculateFactorial{
	public static void main(String[] args){
		int x = Integer.parseInt(args[0]);
		int f = 1;
		if(x>1){
			for(int i=1;i<=x;i++){
				f=f*i;
			}
		}
		System.out.println("factorial is   :"+f);
	}
}