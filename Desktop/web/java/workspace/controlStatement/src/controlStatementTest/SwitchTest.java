package controlStatementTest;

import java.util.Scanner;

public class SwitchTest {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int choice = 0;
		String redMessage = "경고";
		String yellowMessage = "노랑 ";
		String	blackMessage = "검정 ";
		String	errorMessage = "-1 ";
		String result = null; 
				
		choice = sc.nextInt();
		
		
		
		switch(choice) {
		case 1:
			result = redMessage;
			break;
		case 2:
			result = yellowMessage;
			break;
		case 3:
			result = blackMessage;
			break;
		default:
			result = errorMessage; 
			break;
	
		}
	}
}
