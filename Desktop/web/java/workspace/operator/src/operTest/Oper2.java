package operTest;

import java.util.Scanner;

public class Oper2 {
	public static void main(String[] args) {
		//대소 비교 
		// 두 정수 입력받기 
		
		Scanner sc = new Scanner(System.in);
		int num1=0, num2=0;
		String result = null;
		String message ="두 정수를 입력하세요",message2="ex) 1 2";
		
		
		System.out.println(message);
		System.out.println(message2);
		
		num1 = sc.nextInt();
		num2 = sc.nextInt();
		
		result = num1 > num2 ? "더 큰값" + num1 : num2 == num1 ? "두 수는 같습니다" : "더 큰값" + num2 ;
		
		System.out.println(result);
		
		//QA 잘 되는지 테스트 하는것.
	}
}
