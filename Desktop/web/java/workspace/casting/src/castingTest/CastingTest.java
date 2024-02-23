package castingTest;

class Car{
	
	public Car() {
		// TODO Auto-generated constructor stub
	}
	
	void enginStart() {
		System.out.println("열쇠로 시동 ");
	}
}

class SuperCar extends Car{
@Override
void enginStart() {
	
	System.out.println("음성으로 시동 킴");
	}

void oppenRoof() {
	System.out.println("지붕열기");
}

}

public class CastingTest {
	
	public static void main(String[] args) {
		
		Car matiz = new Car();
		SuperCar ferrari = new SuperCar(); 
	//	up casting
		Car noOptionferrari = new SuperCar();
		noOptionferrari.enginStart();
	// down casting
		SuperCar fullOptionFerarri = (SuperCar)noOptionferrari; 
		fullOptionFerarri.oppenRoof();
	//오류
		//SuperCar brokenferrari = (SuperCar) new Car();
		
	//instanceof :조건식 
	//객체 instanceof 타입 : 참 또는 거짓 
		
	//up casting 된 객체는 부모에 자식값 들어간다. 그럼으로 자식타입,부모타입 모두만족 
		
	}
}
