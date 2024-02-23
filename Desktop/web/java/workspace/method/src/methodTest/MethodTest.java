package methodTest;

public class MethodTest {
	
	static int f(int x){
		return 2*x+1; 
	}
	// 두 정수의 덧셈 메소드 
	
	int add(int number1 , int number2) {
		return number1 + number2;
	}
	
	//메소드 사용법
	//1. 메소드 선언시 static 을 붙여준다.
	//2. 사용하고자 하는 메소드의 소속을 알려준다. 
	public static void main(String[] args) {
		MethodTest mt = new MethodTest(); 
		System.out.println(mt.f(10));
	
		
	}
}
