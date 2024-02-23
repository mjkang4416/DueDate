package classTest;




public class ClassTask4 {
	
	//클래스로 리턴할 때
	//각 필드에 직접 접근하여 원하는 위치에 사용할때
	
	//배열로 리턴할 때 
	//모든 데이터를 순서대로 사용할때
	
	Result getMaxandMin(int[]arData) {
	
			Result result = new Result(arData[0],arData[0]); 
			
			for(int i=0; i<arData.length; i++) {
				if(result.max<arData[i]) {
					result.max = arData[i]; 
				}
				if(result.min>arData[i]) {
					result.min = arData[i]; 
				}
			}
			return result; 
	}

public static void main(String[] args) {
	ClassTask4 classTask4 = new ClassTask4(); 
	int arData[] = {5,6,8,2,7};
	
	Result result = classTask4.getMaxandMin(arData); 
	
	System.out.println(result.min); 
	System.out.println(result.max);
				
			}
		
	
}
