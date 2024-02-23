package lambdaTask;

public class PrintNameTask {
	public static void main(String[] args) {
		Name name = ( first , last)->  first+last; 
		
		System.out.println(name.getFullName("kang", "minjeong"));
	}
}
