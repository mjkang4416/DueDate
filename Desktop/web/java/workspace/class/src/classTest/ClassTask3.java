package classTest;


class Store{
	String product;
	int priprice; 
	int stock; 
	
	public Store() {
	;
	}

	public Store(String product, int priprice, int stock) {
		super();
		this.product = product;
		this.priprice = priprice;
		this.stock = stock;
	}
	
	void sell(Customer customer) {
		customer.bankbook -=  priprice - priprice*(customer.discountRait/100); 
		stock --; 
	}
	
	
}

class Customer{
	
	String customerName; 
	String fonnum; 
	int bankbook; 
	int discountRait; 
	
	public Customer() {
		; 
	}

	public Customer(String customerName, String fonnum, int bankbook, int discountRait) {
		super();
		this.customerName = customerName;
		this.fonnum = fonnum;
		this.bankbook = bankbook;
		this.discountRait = discountRait;
	}
	
	
	
	
	
}


public class ClassTask3 {
 public static void main(String[] args) {
	Store 민정샵 = new Store("가방",2_0000,4); 
	Customer 민정 = new Customer("민정","01088454426",30000,24);
	민정샵.sell(민정);
	
	System.out.println(민정샵.stock);
	System.out.println(민정.bankbook);

 }
}

