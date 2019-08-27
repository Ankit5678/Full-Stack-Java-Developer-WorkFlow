class Demo{
	public static void main(String[] args) {
		int s=0;
		for(int i=1;i<=10;i+=2){
				s = (10*i)+(10*(i-1));
				System.out.println(s);
				s=0;
		}
	}
}