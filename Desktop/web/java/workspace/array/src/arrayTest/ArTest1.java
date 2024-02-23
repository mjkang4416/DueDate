package arrayTest;

import java.util.Iterator;

public class ArTest1 {
	public static void main(String[] args) {
		int arrData[] = {1,3,2,6,1};
//		System.out.println(arrData);
//		System.out.println(arrData.length);
		
		for (int i = 0; i < arrData.length; i++) {
			System.out.println(arrData[i]);
		}
		
		//5,4,3,2,1 넣은후출력
		
		for(int i=0; i<arrData.length; i++) {
			arrData[i] = 5-i;
		}
		
		for(int j=0; j<arrData.length; j++) {
			System.out.println(arrData[j]);
		}
	}
}
