class InnerClassDemo{
	
	void age(){
		System.out.println("parent's age()");
	}
	
	class ChildInnerClassDemo{
		void age(){
			InnerClassDemo.this.age();
			System.out.println("child's age()");
		}
	}
}

class CallOuterInner{
	public static void main(String[] args) {
		InnerClassDemo obj = new InnerClassDemo();
		InnerClassDemo.ChildInnerClassDemo cobj = obj.new ChildInnerClassDemo();
		cobj.age();
	}
} 