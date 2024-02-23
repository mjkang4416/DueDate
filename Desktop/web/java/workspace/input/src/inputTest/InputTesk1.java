package inputTest;

import java.util.Scanner;

public class InputTesk1 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num1 = 0 , num2 = 0 ,result = 0; 
		String message1 = "첫 번째 정수 : ", message2 ="두 번째 정수 : ";
		String format = "%d + %d = %d \n";

		
		
		System.out.print (message1);
		
		num1 = Integer.parseInt(sc.next());
		
		System.out.print(message2); 
		num2 = Integer.parseInt(sc.next());
		
		result = num1 + num2; 
		System.out.printf(format,num1,num2,result);
		
	}
}
