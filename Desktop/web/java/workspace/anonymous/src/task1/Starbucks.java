package task1;

public class Starbucks {
	
	public void register(Form form) {
		String[] menu = form.getMenew();
		
		for(int i=0; i<menu.length; i++) {
			System.out.println(i+ 1 + menu[i]);
		}
		
		if(form instanceof Formadapter) {
			System.out.println("무료나눔행사 진행");
		}
		else {
		form.sell("아메리카노");
		}
	}
	
	
}
