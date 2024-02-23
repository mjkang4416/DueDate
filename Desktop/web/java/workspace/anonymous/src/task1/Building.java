package task1;

public class Building {
	public static void main(String[] args) {
		Starbucks ganmam = new Starbucks();
		
		Starbucks jamsil = new Starbucks();
		
		jamsil.register(new Formadapter() {
			@Override
			public String[] getMenew() {
	
				return new String[] {"아메리카노","카페라떼","에이드","디카페인"};
			}
		});
		
		ganmam.register(new Form() {
		
	
			
			@Override
			public void sell(String meneu) {
				String[] meneus = getMenew();
				
				for(int i=0; i<meneus.length; i++)
				{
					if(meneus[i].equals(meneu)) {
						System.out.println(meneus[i]+"판매완료");
						break;
					}
				}
				}
			
			@Override
			public String[] getMenew() {
				
				return new String[] {"아메리카노","카페라떼","에이드","디카페인"};
			}
		});
	}
}
