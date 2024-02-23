package operTest;

import java.util.Scanner;

public class Oper3 {
	public static void main(String[] args) {
		//키입력 정수면 정수로출력 , 실수면 실수로출력 삼항연산자 사용 
		Scanner sc = new Scanner(System.in);
		String format = null; 
		boolean result = false; 
		
		System.out.print("값을 입력하시오 : "); 
		
		double key = sc.nextDouble();
		
		
		
		result = key - (int)key == 0; 
		
		format = result ? "%.0f" : "%.02f";
		format += "\n";
		
		System.out.printf(format, key);
	}
}
