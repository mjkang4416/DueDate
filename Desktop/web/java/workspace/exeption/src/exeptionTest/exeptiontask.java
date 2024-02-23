package exeptionTest;

import java.util.Scanner;

public class exeptiontask {
	public static void main(String[] args) {
		//5개의 정수만 입력받기 
		//-무한 입력상태 
		// q입력시 나가기 
		// 각 정수는 배열에 담기 
		// if문은 딱 한번 사용하기 
		int[] num = new int[5]; 
		Scanner sc = new Scanner(System.in);
		int i= 0; 
		String input = null;
	
		System.out.println();
		while(true) {
			System.out.println("정수를 입력해 주세요");
			input = sc.next();
		
			if(input.equals(input)) {
				break; 
			}

			try {
				num[i] = Integer.parseInt(input);
				System.out.println("성공");
			}  catch(NumberFormatException e ){
				System.out.println("실패");
			} 
			  catch(ArrayIndexOutOfBoundsException e ){
				  System.out.println("바운더리 벗어");
			} 
			catch(Exception e ){
				e.printStackTrace();
			} 
		i++;
		
		
	
	}
		
}
}
