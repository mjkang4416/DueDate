package exeptionTest;

import java.util.Scanner;

public class Chating {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String message = null; 
		System.out.println("상대방에게 보내는 메세지");
		message = sc.nextLine();
		
		if(message.contains("바보")) {
			try {
			throw new BadWordExeption("비속어 사용");
			
			}catch (BadWordExeption e){
				System.out.println("비속어는 사용하지 말아주세");
			}
		}
		else {
			System.out.println(message);
		}
	}
}
