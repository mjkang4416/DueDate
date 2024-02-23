package inputTest;

import java.util.Scanner;

public class InputTask2 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num1=0, num2=0, num3=0, result =0;
		String message = "세 정수를 입력 해 주세요 : ", exampleMessage = "예) 1 3 4";
		String format = "%d * %d * %d = %d";
		
		System.out.println(message);
		System.out.println(exampleMessage);
		
		num1 = Integer.parseInt(sc.next());
		num2 = Integer.parseInt(sc.next());
		num3 = Integer.parseInt(sc.next());
		
		result  = num1 * num2 * num3; 
		
		System.out.printf(format,num1,num2,num3,result);
		
		
		
	}
}
