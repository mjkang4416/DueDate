package interfaceTest;

public class Cat implements Pet{
	
@Override
public void sitDown() {
	System.out.println("앉지 않는다");
	
}

@Override
	public void poop() {
		System.out.println("말안해도 잘한다.");
	}

@Override
	public void waitNow() {
		System.out.println("안기다린다.");
	}
}
