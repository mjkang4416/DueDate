package controlStatementTest;

public class ForTask {
	public static void main(String[] args) {
//A~F 까지 출력
//		for(int i=0; i<6; i++) {
//			System.out.println((char)(65+i));
//		}
//	System.out.println();	
//		
//c 만 빼고 출력
//	for(int i=0; i<6; i++) {
//			System.out.println((char)(i>1? 66:65)+i);
		
//012340123401234 출력
		for(int i=0; i<15; i++) {
			System.out.print(i%5);
		}
	
	System.out.println();
//aBcD~Z 출력
	for(int i=0; i<26; i++) {
		System.out.print((char)((i%2 == 0 ? 97 : 65)+i));
	}
	}
}
