package staticTest;

class Company {
	static int money ; 
	String name; 
	int age; 
	int income; 
	
	public	Company(String name, int age) {
		this.name = name; 
		this.age = age; 
	}
}


public class StaticTask {
	public static void main(String[] args) {
		Company employ1 = new Company("강민정",25); 
		Company employ2 = new Company("강아름",23); 
		
		employ1.income = 10_000; 
		employ2.income = 2_000; 
		
		Company.money += employ1.income;
		Company.money += employ2.income;
		
		System.out.println(employ1.money);
		System.out.println(employ2.money);
	}
	
}
