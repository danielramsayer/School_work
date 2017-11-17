/************************
  * Name:
 * Program name: MathOP.java
 * Date: 18 Oct 17
 * Purpose:adding and subtrating
 **************************/
public class MathOP {
	private double num1;
	private double num2;

	MathOP(double n1, double n2) {
		this.num1 = n1;
		this.num2 = n2;
	}


	public double getNum1() {
		return num1;
	}

	public void setNum1(double num1) {
		this.num1 = num1;
	}


	public double getNum2() {
		return num2;
	}

	public void setNum2(double num2) {
		this.num2 = num2;
	}

	public double MathAdd() {
		return num1 + num2;
	}

	public double MathSub() {
		return num1 - num2;
	}
}
