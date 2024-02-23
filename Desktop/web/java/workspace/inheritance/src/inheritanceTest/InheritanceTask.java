package inheritanceTest;

class Car{
	String brand;
	String color; 
	int price; 
	
	public Car() {
		// TODO Auto-generated constructor stub
	}

	public Car(String brand, String color, int price) {
		super();
		this.brand = brand;
		this.color = color;
		this.price = price;
	}
	
	void engineStart() {
		System.out.println("열쇠 시동 켜");
	}
	
	void engineStop() {
		System.out.println("열쇠 시동 꺼");
	}
}

class Supercar extends Car{
	String mode; 
	
	public Supercar() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public Supercar(String brand, String color, int price,String mode) {
		super(brand,color,price);
		this.mode = mode;
	}



	@Override
	void engineStart(){
		System.out.println("시동 켜");
	}
	
	void engineStop() {
		System.out.println("시동 꺼");
	}
}


public class InheritanceTask {
	public static void main(String[] args) {
		Car matiz = new Car(); 
		matiz.engineStart();
		
		
		Supercar audi = new Supercar("audi","black",200000,"run");
		audi.engineStart();
	}
	
}
