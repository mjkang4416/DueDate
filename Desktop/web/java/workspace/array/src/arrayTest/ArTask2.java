package arrayTest;

import java.util.Scanner;


public class ArTask2 {
	public static void main(String[] args) {
//		Scanner sc = new Scanner(System.in);
//		String message = "문자열 입력 : ",input="",result="";
//		System.out.println(message);
//		input = sc.next();
//		
//		for(int i=0; i<input.length(); i++) {
//			char c =  input.charAt(i); 
//			if(c >= 65 && c<= 90) { // 대문자 
//				result += (char)(c+32);
//			}
//			else if (c >= 97 && c <= 122) { // 소문자 
//				result += (char)(c-32);
//				
//			}
//			else {
//				result += c; 
//			}
//
//	}
//		System.out.println(result);
//		
//		
		//char[][] ko ={ {'일' ,'이 ','삼 ','사 ','오 ','육 ','칠 ','팔 ','구 ','공 '}};
	
	Scanner sc = new Scanner(System.in);
	String hangle = "공일이삼사오륙칠팔구" , input = null;
	String message = "정수", result = ""; 
			
	System.out.println(message);
	input = sc.next();
	
	for(int i=0; i<input.length(); i++) {
		result += hangle.charAt(input.charAt(i)-48);
	}
	
	
	
	}		
}
