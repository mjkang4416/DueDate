package classTest;

class Student{
	
	//번호
	int num;
	//국어점수
	int koscore; 
	//수학점수
	int mathscore;
	//총점
	int sumscore; 
	//평균 
	double average; 
	
	
	//기본생성자 
	public Student() {
		;
	}

	//초기화 생성자 
	public Student(int num, int koscore, int mathscore) {
		super();
		this.num = num;
		this.koscore = koscore;
		this.mathscore = mathscore;
		this.sumscore = koscore + mathscore; 
		this.average = Double.parseDouble(String.format("%.3f", sumscore/3.0));
	}
	
	
	
	
}




public class ClassTask2 {
	public static void main(String[] args) {
	
	Student 강민정 = new Student(); 
	강민정 = new Student(1,23,43); 
	
	System.out.println(강민정.average);
	System.out.println(강민정.sumscore);
}
}
