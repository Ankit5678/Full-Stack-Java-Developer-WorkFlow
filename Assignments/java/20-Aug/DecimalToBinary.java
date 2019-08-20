//Write a java program which take a decimal number from user at runtime and then prints it's binary equivalent.

import java.lang.*;

class DecimalToBinary{
	public static void main(String[] args){
		int d = Integer.parseInt(args[0]);
		int n, sum = 0, r;
        String x = "";
        String s = "";
        while(d > 0){
        	r = d % 2;
            x = x + "" + r;
            d = d / 2;
		}
		//System.out.println(x);
		for(int i=x.length()-1;i>=0;i--){
			s = s+""+x.charAt(i);
		}
		System.out.println(s);
	}
}