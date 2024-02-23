package castingTest;

public class Encription {
	public static void main(String[] args) {
		String password = "alswjdWKd";
		String encryptedpassword = "" , decryptedpassword = "";
		final int KEY= 3;
		
		
		for(int i = 0; i< password.length(); i++) {
			encryptedpassword += (char)( password.charAt(i) * KEY); 
		}
		
		System.out.println(encryptedpassword);
		
		for(int i=0; i< encryptedpassword.length(); i++) {
			decryptedpassword += (char)(encryptedpassword.charAt(i)/KEY); 
		}
		
		System.out.println(decryptedpassword);
	}
}
