package lambdaexpert;

import java.util.Scanner;

public class Mymath {
	//연산자 한개를 전달받아서 연산하도록 연산식 구현 
	public static Calc clculator (String oper) {
		Calc calc = null; 

		
		switch(oper) {
		case "+": 
			calc = (n1 , n2) -> n1 + n2;
			break;
			
		case "-":
			calc = (n1, n2) -> n1 - n2; 
			break; 
		}
		return calc;
	}
	
	
	public static void main(String[] args) {
		
		//전체 수식에서 연산자만 분리하는 메소드 구현
		Opercheck operCheck = expression-> {
			String temp =""; 
			for(int i=0; i<expression.length(); i++) {
				char c = expression.charAt(i);
				if(c=='+'|| c=='-') {
					temp += c;
				}
			}
			return temp.split(""); 
		};
		//사용자가 수식 입력
		Scanner sc = new Scanner(System.in);
		
		String message = "+,-식 입력";
		System.out.println(message);
		String expression = sc.nextLine();
		expression = expression.trim();
		expression = expression.replaceAll(" ","");
		
		String[] numbers = null , opers = null; 
		int num1 , num2;
	
		numbers = expression.split("\\+|\\-");
		
		opers = operCheck.checkOper(expression);
	
		num1 = Integer.parseInt(numbers[0].equals("")? opers[0]+ numbers[1] : numbers[0]);
		
		for(int i=0; i<opers.length; i++) {
			if(i==0 && num1<0) {
				continue;
			} 
			num2 = Integer.parseInt(numbers[i+1]);
			num1 = Mymath.clculator(opers[i]).calc(num1, num2);
		}
		System.out.println(num1);
	}
}
