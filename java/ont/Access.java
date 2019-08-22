package ont;
class Demo extends Prt{
	public void display(){
		System.out.println("inside Demo");
	}
}

public class Access{
	public Demo obj(){
		System.out.println("inside obj");
		Demo d = new Demo();
		return d;
	}

}