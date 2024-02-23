package controlStatementTest;

import java.util.Scanner;

public class IfTest {
	public static void main(String[] args) {
		
			
			Scanner sc = new Scanner(System.in);
			int num1=0, num2=0;
			String result = null;
			String message ="두 정수를 입력하세요",message2="ex) 1 2";
			
			
			System.out.println(message);
			System.out.println(message2);
			
			num1 = sc.nextInt();
			num2 = sc.nextInt();
			
			
			if(num1 >num2) {
				result = "더 큰값 " +num1;
			}
			else if(num1 < num2) {
				result = "더 큰값 " +num2;
			}
			else {
				result = "두 수가 같습니다 ";
			}
			System.out.println(result);
			// 분기별로처리x  일괄처리 
			
		}
	}


