package operTest;

public class Oper1 {
	public static void main(String[] args) {
		boolean isTrue = 10 != 11; 
		
		System.out.println(11 == 10);
		System.out.println(11 != 10);
		System.out.println(isTrue);
		System.out.println(isTrue && 10 == 10);
		System.out.println(isTrue && 10 != 10);
		// &&는 앞이F 면 뒤에거 연산 x 어짜피 f니까 
		System.out.println(isTrue || 10 != 10);
		System.out.println(isTrue || !(10 != 10));
	}
}
