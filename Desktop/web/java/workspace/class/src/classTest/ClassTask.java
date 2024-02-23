package classTest;

import java.util.Scanner;

class SuperCar{
	//브랜드
	String brand; 
	//색상
	String color; 
	//가격
	long  price;
	//엔진
	boolean engin = true; 
	//비번
	String password; 
	
	//기본생성자
	public SuperCar() {
		;
	}
	//비밀번호 오류 횟수 
	int errorCount; 
	
	//static 블록 어떤 생성자든 최초 한번만 
	static {
		System.out.println("출고 축하드립니다.");
		
	}
	
	
	//초기화 블록 어떤생성자 호출되도 실행됨, 호출 될때마다 
	{
		this.password = "0000"; 
	}
	
	//초기화 생성자 
	public SuperCar(String brand, String color, long price) {
		this.brand = brand;
		this.color = color; 
		this.price = price; 

	}
	
	//초기화 생성자 오버로딩 
	
	public SuperCar(String brand, String color, long price, String password) {
		super();
		this.brand = brand;
		this.color = color;
		this.price = price;
		this.password = password;
	}



	//시동 켜기 
	//사용자가 입력한 비번이 맞을때만 시동켜기, 연속3회 실패시 경찰출동 
	void enginstart() {
		
		engin = true;  
		
		}
		
	//시동 끄기 
	void enginstop() {
		engin = false; 
	}
	//비밀번호 입력
	public boolean checkpassword(String password){
		return this.password.equals(password); 
	}
}
		
		
public class ClassTask {
	public static void main(String[] args) {
		SuperCar ferrari = new SuperCar("ferrari","Red",7_0000,"initialPassward");
		Scanner sc = new Scanner(System.in); 
		int choice = 0; 
		String password = null ;
		
		while(true) {
			System.out.println("1. 시동켜기 \n 2. 시동끄기");
			choice = sc.nextInt(); 
		
		
			

			
			if(choice==1) { //시동켜기 
				
				if(!ferrari.engin) {
					System.out.println("비밀번호");
					password = sc.next();
					if(ferrari.checkpassword(password)) {
						ferrari.enginstart();
						System.out.println(ferrari.brand + "시동켜짐");
					}
					else {
						ferrari.errorCount++; 
						if(ferrari.errorCount>2) {
							System.out.println("경찰출동");
						}
						break;
					}
				}
				else {
					System.out.println("시동이 이미 켜져있습니다.");
				}
			}
			else if(choice==2) { //시동끄기
				if(ferrari.engin) {
					ferrari.enginstop();
					System.out.println(ferrari.brand+"시동꺼짐");
				}
				else
					System.out.println("이미 켜져있습니다.");
			}
				
			}
			
		
		
	}
}




