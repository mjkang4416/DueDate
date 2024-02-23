package lambdaTest;

public class LambdaTest {
	public static void main(String[] args) {
		Lambdainter lambdainter = number -> number%10 ==0;
		
		System.out.println(lambdainter.chek(20));
		
		
	}
}
