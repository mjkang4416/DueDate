package markerinterface;

public class Lab {
	public void checkkinds(Animal[] arAnimal) {
		for(int i=0; i<arAnimal.length; i++) {
			if(arAnimal[i] instanceof CarnivoreMarker) {
				System.out.println("육식동물");
			}
			else if(arAnimal[i] instanceof HerbivorMarker) {
				System.out.println("초식동물");
			}
			else{
				System.out.println("잡식동물");
			}
		}
	}
	
	public static void main(String[] args) {
		new Lab().checkkinds(new Animal[] {new Bear(), new Cow(), new Dog(), new Tiger()});
}
}
