/************************
 *
 * Program name: inheritance
 * Date: 29 Oct 17
 * Purpose: Test MathOP stuff.
 */
import java.util.Scanner;
import java.io.*;

public class TestMathOP extends MathOP{

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);

		while (true) {
			System.out.print("Enter the First number >>");
			double num1 = Double.parseDouble(s.nextLine());
			System.out.print("Enter the Second number >>");
			double num2 = Double.parseDouble(s.nextLine());

			//double num1 = s.nextDouble();
			//System.out.print("Enter the Second number >>");
			//double num2 = s.nextDouble();
			System.out.print("Enter operator >>");
			String operation = s.nextLine();
			MathOP mathOP = new MathOP();
			mathOP.setNum1(num1);
			mathOP.setNum2(num2);
			MathOP2 math = new MathOP2();
			math.setNum1(num1);
			math.setNum2(num2);
			if (operation.equals("+")) {
				System.out.println("The answer is " + mathOP.MathAdd());
			}
			else if (operation.equals("-")){
				System.out.println("The answer is " + mathOP.MathSub());
			}
			else if (operation.equals("*")){
				System.out.println("The answer is " + math.mul());
			} else {
				System.out.println("The answer is " + math.div());
			}

			System.out.print("Do you want to exist (Y/N)?");
			String choice = s.nextLine();

			if (choice.equals("Y")) {
				System.out.println("Thanks for using our system");
				System.exit(0);
			}
		}

	}

}
