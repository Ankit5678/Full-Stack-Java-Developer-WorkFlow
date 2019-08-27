import java.util.*;
class OuterClassCalculator{
	int i;
	int get(){
		Scanner s = new Scanner(System.in);
		return (s.nextInt());
}

	class InnerClassCalculator{
		void add(int a,int b){
			System.out.println("sum is:  "+(a+b));
		}
		void sub(int a,int b){
			System.out.println("sub is:  "+(a-b));
		}
		void mul(int a,int b){
			System.out.println("mul is:  "+(a*b));
		}
		void div(int a,int b){
			System.out.println("div is:  "+(a/b));
		}
		void compute(){
			Scanner sc = new Scanner(System.in);
			int a = sc.nextInt();
			char ch = sc.next().charAt(0);
			int b = OuterClassCalculator.this.get();
			switch (ch){
				case 'a':
					add(a,b);
					break;
				case 's':
					sub(a,b);
					break;
				case 'm':
					mul(a,b);
					break;
				case 'd':
					div(a,b);
					break;
				default:
					break;
			}
		}
	}
}


class CalculatorDemo{
	public static void main(String[] args) {
		OuterClassCalculator obj = new OuterClassCalculator();
		obj.i = 10;
		OuterClassCalculator.InnerClassCalculator iobj = obj.new InnerClassCalculator();
		iobj.compute();
	}
}