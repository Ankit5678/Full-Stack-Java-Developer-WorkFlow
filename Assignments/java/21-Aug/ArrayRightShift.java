//shifting arry elements to right

import java.util.*;

class ArrayRightShift{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("enter 5 elements");
		int[] arr = new int[5]; 
		for(int i=0;i<5;i++){
			arr[i] = sc.nextInt();
		}
		//System.out.print(arr[4]+"  ");
		int temp = arr[4];
		for(int i=4;i>0;i--){
			arr[i]=arr[i-1];
		}
		arr[0]=temp;
		for (int i=0; i<5; i++){
			System.out.print(arr[i]+" ");
		}
	}
}