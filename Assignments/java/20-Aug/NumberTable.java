//Write a java program which prints the table of a number upto it's limit. The numbers should be taken from runtime. Output in format:
//4 * 1 = 4

class NumberTable{
	public static void main(String[] args){
		int x = Integer.parseInt(args[0]);
		System.out.println("Table is:");
		for(int i=1;i<=10;i++){
			System.out.println(x+"*"+i+"="+x*i);
		}
	}
}