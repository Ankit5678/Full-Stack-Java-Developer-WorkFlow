import java.util.*;
class ObjectSorting{
	public static void main(String[] args) {
		User[] arr = new User[5];
		Scanner sc = new Scanner(System.in);
		for(int i=0;i<5;i++){
			arr[i]=new User();
			int id = sc.nextInt();
			String s = sc.next();
			arr[i].setId(id);
			arr[i].setName(s);
		}

		for (int i = 0; i<arr.length; i++){
			for (int j = i + 1; j<arr.length; j++){
                if (arr[i].compareTo(arr[j])>0){
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        
		for(int i=0;i<5;i++){
			System.out.println(arr[i].toString());
		}
	}
}