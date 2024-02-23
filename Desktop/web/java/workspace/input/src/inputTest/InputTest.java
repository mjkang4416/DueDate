package inputTest;

import java.util.Scanner;

public class InputTest {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String name = null ,firstname = null, lastname = null ;
		
		System.out.print("이름 : ");
//		
//		firstname = sc.next();
//		lastname = sc.next();
//		
//		name = lastname + firstname; 
		
		name = sc.nextLine(); 
		
		System.out.println(name + "님 환영합니다");

	}
}
    