package classTest;

class A{
	int data; 
	
	public A(int data) {
		this.data = data; 
	}
	
	public A() {
		
	}
	
	void printdata() {
		System.out.println(data);
		System.out.println(this.data);
	}
	
	
}

public class ClassTest {
	
	public static void main(String[] args) {

		//객체화  

		A a = new A(10);
		a.printdata(); 
		
		A b = new A(); 
		b.printdata();
		
		
		
		System.out.println(a);
		System.out.println(b);

	}

	
}
