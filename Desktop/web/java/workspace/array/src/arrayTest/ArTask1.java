package arrayTest;

import java.util.Scanner;

public class ArTask1 {
	public static void main(String[] args) {
		int result = 0; 
		//int max = -100000; 
		//int min = 100000; 
		Scanner sc = new Scanner(System.in);
		int langth = sc.nextInt();
		int Data[] = new int[langth]; 
		double average = 0; 
		
		
		
//		for(int i=0; i<100; i++) {
//			Data[i]=i+1;
//		}
//		for(int i=0; i<100; i++) {
//			result = i%2==0? result+=i : result;
//				}
//		System.out.println(result);
//	}
//		for(int i=0; i<6; i++) {
//			Data[i] = (char)(65+i);
//		}
//		for(int i=0; i<6; i++) {
//			System.out.println(Data[i]);
//		}
//		
//		for(int i=0; i<5; i++) {
//		Data[i]= (char)(i > 1? (66+i):(65+i)) ;
//		}
//		for(int i=0; i<5; i++) {
//			System.out.println(Data[i]);
//		}
		
//		for(int i=0; i<5; i++) {
//			Data[i] = sc.nextInt();
//			
//		}
//		for(int i=0; i<5; i++) {
//		 max = Data[i]>max ? Data[i]: max;
//		 min = Data[i]<min ? Data[i]: min; 
//		}
//		System.out.println(max);
//		System.out.println(min);
			
	
		
		for(int i=0; i<langth; i++) {
			System.out.println("정수 입");
			Data[i] = sc.nextInt();
			
		}
		
		for(int i=0; i<langth; i++) {
			result += Data[i]; 
		}
		
		average = (double)result/Data.length; 
		
		System.out.println(average);
		
	}
		
		
}
