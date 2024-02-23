package methodTest;

import java.util.Scanner;

public class MethodTast {
	
	void hong(int n) {
		for(int i=0; i<n; i++) {
			System.out.println("홍길동");
		}
	}
	
	void name(String name, int n) {
		for(int i=0; i<n; i++) {
		System.out.println(name);}
	}
	
	int oddEven(int num) {
		return num+1; 
	}
	
	String english(String English, String result) {
		for(int i=0; i<English.length(); i++) {
			char enchar = English.charAt(i);
			if(enchar >=65 && enchar <=90) {
				result += (char)(enchar+32); 
			}
			else if(enchar >=97 && enchar <=122) {
				result += (char)(enchar-32); 
			}
			else
				result +=English.charAt(i); 
		}
		return result; 
	}
	
	int wantString(String ch, char wantch,int result) {
		for(int i=0; i<ch.length(); i++) {
			if(ch.charAt(i)== wantch){
				result++; 
			}
			
		}
		return result; 
	}
	
	int wantInNum(int[] num, int indexNum ,int arrnum) {
		for(int i=0; i<arrnum; i++) {
			if(i==indexNum) {
				return num[i];
			}
			
		}
		return -1; 
	}

	int changToInteger(String hangle) {
		String hangles = "일이삼사오륙칠팔구";
		String result = "";
		for(int i=0; i<hangle.length(); i++) {
			
			char c = hangle.charAt(i);
			result += hangles.indexOf(c);
		}
		return Integer.parseInt(result); 
	}
	
	
	
	public static void main(String[] args) {
		MethodTast Mt = new MethodTast();
		Scanner sc = new Scanner(System.in);
//		String message = "몇회 반복하겠습니까? :";
//		System.out.println(message);
//		int n  = sc.nextInt(); 
//		Mt.hong(n);
//		
//		String message = "몇회 반복하겠습니까? :";
//		int n  = sc.nextInt();
//		String name = sc.next();
//		Mt.name(name,n);
//		System.out.println("문자열을 입력하세요");
//		String English = sc.next(); 
//		String result = ""; 
//		System.out.println(Mt.english(English, result));
		
		
//		System.out.println("문자열 입력");
//		String ch = sc.next(); 
//		System.out.println("원하는 문자 입");
//		String want = sc.next();
//		char wantch = want.charAt(0);
//		int result = 0; 
//		
//		System.out.println(Mt.wantString(ch, wantch, result));

//		int arrnum = 5; 
//		int num[] = new int[arrnum]; 
//		
//		System.out.println("정수입력");
//		for(int i=0; i<arrnum; i++) {
//			num[i] = sc.nextInt();
//		}
//		
//		System.out.println("원하는 인덱스 번호 0-4까지");
//		
//		int indexnum = sc.nextInt(); 
//		System.out.println(Mt.wantInNum(num, indexnum, arrnum));
		
		String Korea = "일,이,삼,사,오,육,칠,팔,구";
		System.out.println("한글입력");
		
		String ko = sc.next();
		String result = ""; 
		
		
	}
	
}
