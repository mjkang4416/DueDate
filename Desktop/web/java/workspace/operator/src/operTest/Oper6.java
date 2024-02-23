package operTest;

public class Oper6 {
	public static void main(String[] args) {
		//1~10 중 3 까지 출력 
//		for(int i=0; i<10; i++) {
//			System.out.println(i+1);
//			if(i==2) {
//				break;
//			}
//		}
		//1~10 중 3 제외하고 출력
		for(int i=0; i<10;  i++) {
			if(i==2) {
				continue;
			}
			System.out.println(i+1);
		}
		

	}
}
