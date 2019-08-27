import java.util.regex.*;
class WordCounter{
	public static void main(String[] args) {
		int count=0;
		String data = "wow! java is object oriented language.java is best for desktop application.";
		String regex = "\\bjava\\b";
		Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
		Matcher matcher = pattern.matcher(data);
		while (matcher.find()){
    		//System.out.print("Start index: " + matcher.start());
    		//System.out.print(" End index: " + matcher.end() + " ");
    		//System.out.println();
    		count++;	
		}
		System.out.println(count);
		if(count>0){
			StringBuffer sbf = new StringBuffer("java");
			String s1 = "java";
			sbf.reverse();
			String s2 = sbf.toString();
			//System.out.println(s2);
			if(s1.equals(s2)){
				System.out.println("palindrom");
			}
			else{
				System.out.println("not palindrom");
			}
		}
	}
}