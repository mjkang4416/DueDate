package castingTask2;

public class Caracter {
	
	public void hunt(Monster monster) {
		if(monster instanceof Fairy) {
			Fairy fairy = (Fairy)monster;
			fairy.get();
		}
		else if (monster instanceof Human) {
			Human human = (Human) monster;
			human.get();
		}
		else if (monster instanceof Oak) {
			Oak oak = (Oak) monster; 
			oak.get();
		}
	}
	
	
	
	public static void main(String[] args) {
		Caracter caracter = new Caracter(); 
		Monster monsters[] = {new Fairy(),new Human(),new Oak()};
		
		for(int i=0; i< monsters.length; i++) {
			caracter.hunt(monsters[i]);
		}
		
	
	}
	
}


