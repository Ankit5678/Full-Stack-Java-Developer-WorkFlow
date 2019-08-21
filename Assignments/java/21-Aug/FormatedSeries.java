//35 36 37 Thirty Eight 39 41 42 44 Fourty Five 46

class FormatedSeries{
	public static void main(String[] args) {
		for(int i=35;i<=46;i++){
			if(i==38){
				System.out.println("Thirty Eight");
			}
			else if(i==40){
				continue;
			}
			else if(i==43){
				continue;
			}
			else if(i==45){
				System.out.println("Fourty Five");
			}
			else{
				System.out.println(i);
			}
		}
	}
}