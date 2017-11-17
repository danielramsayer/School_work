/************************
 * Name:
 * Program name: TestMathOP.java
 * Date: 18 Oct 17
 * Purpose:testing
 */
import java.util.Scanner;

public class TestMathOP {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		while (true) {
			System.out.print("Enter the First number >>");
			double num1 = Double.parseDouble(scanner.nextLine());
			System.out.print("Enter the Second number >>");
			double num2 = Double.parseDouble(scanner.nextLine());
			System.out.print("Enter operator >>");
			String operation = scanner.nextLine();
			MathOP mathOP = new MathOP(num1, num2);
			if (operation.equals("+")) {
				System.out.println("The answer is " + mathOP.MathAdd());
			} else {
				System.out.println("The answer is " + mathOP.MathSub());

			}

			System.out.print("Do you want to exist (Y/N)?");
			String choice = scanner.nextLine();
         
         		if (choice.equals("Y")) {
				System.out.println("Thanks for using our system");
				System.exit(0);
			}
		}
		
	}

}
