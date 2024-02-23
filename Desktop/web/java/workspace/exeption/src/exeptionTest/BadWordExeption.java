package exeptionTest;

public class BadWordExeption extends Exception{
	
	//RuntimeException : 컴파일러가 검사하지 않음( 강제종료 시키고 싶을때 사용)
	//Exception : 컴파일러가 검사(강제 종료가 아닌 해당 상황 처리를 원할 때 사용
	
	public BadWordExeption(String message) {
		super(message); 
	}
}
