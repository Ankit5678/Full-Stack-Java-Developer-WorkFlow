//Write a java program which takes 3 numbers from user at runtime, adds them. The program should print PASSING only once if the numbers are individually greater than or equal to 40 and their sum is greater than or equal to 125. Otherwise the output should be FAILING.
//You don't have to use nested if's or logical operators in this program, not if else. You can use multiple ifs
class Comparator{
	public static void main(String[] args){
		int x = Integer.parseInt(args[0]);
		int y = Integer.parseInt(args[1]);
		int z = Integer.parseInt(args[2]);
		int sum = x+y+z;
		int count = 0;
		if(x>=40){
			count++;
		}
		if(y>=40){
			count++;
		}
		if(z>=40){
			count++;
		}
		if(sum>=125){
			count++;
		}
		if(count==4){
			System.out.println("PASSING");
		}
		if(count!=4){
			System.out.println("FAILING");
		}
	}
}