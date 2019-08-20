//Write a java program to print fibonocci series from 1 to 89

class Fibonacci{
	public static void main(String[] args){
		int x=0,y=1,t;    
 		System.out.print(x+" "+y);    
    
 		for(int i=2;i<89;++i){    
  			t=x+y;    
  			System.out.print(" "+t);
  			if(t>=89){
  				break;
  			}    
  			x=y;    
  			y=t;    
 		}
	}
}