import java.util.*;
class WordCounterCaseSensitive{
	public static void main(String[] args) {
		String data = "wow! java is object oriented language. Java is best for desktop application.";
		String[] arr = data.split(" ");
		String temp="";
		Map <String,Integer> list = new HashMap<String,Integer>();
		for (String str: arr) {
            if(list.containsKey(str)) {
                int count = list.get(str);
                    list.put(str,count+1);
            } 
            else{
                    list.put(str,1);
            }
        }
        //System.out.println(list);
		for (int i = 0; i<arr.length; i++){
			for (int j = i + 1; j<arr.length; j++){
                if (arr[i].compareTo(arr[j])>0){
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        // for(int i=0;i<arr.length;i++){
        //  	System.out.println(arr[i]+" hjfgdgfc");
        // }
        for(int i=0;i<arr.length;i++){
        	if(list.containsKey(arr[i])){
        		int count = list.get(arr[i]);
        		System.out.println(arr[i]+"  "+count);
        	}
        }
	}
}