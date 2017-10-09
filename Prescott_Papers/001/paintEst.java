//***************
// Aug 2017
// This program is an estimator for the amount of money you should expect to pay for having a certain amount of wallspace painted, including labor and materials.
//***************

import java.util.Scanner;

public class paintEst{
  public static void main(String[] args){
    final double GALLONCOVERAGE = 115;
    final double LABORCOST = 18.00;
    final double HOURSPERGALLON = 8;
    double rooms, sqFoot, paintPrice = 0;

    Scanner scan = new Scanner (System.in);

    do {
      System.out.print("Please enter the number of rooms to be painted: ");
      rooms = scan.nextDouble();
    } while (valid(rooms));

    do {
        System.out.print("Please enter the total square feet to paint: ");
        sqFoot = scan.nextDouble();
    } while (valid(sqFoot));

    do {
        System.out.print("Please enter the price per gallon of paint: ");
        paintPrice = scan.nextDouble();
    } while (valid(paintPrice));

    //paintRequired is rounded up because you have to buy the whole gallon, even if you don't use it all.
    double paintRequired = Math.ceil(sqFoot / GALLONCOVERAGE);
    double hourpaintRequired = sqFoot / GALLONCOVERAGE;
    double laborRequired = hourpaintRequired * HOURSPERGALLON;
    double paintCost = paintRequired * paintPrice;
    double totalLaborCost = laborRequired * LABORCOST;
    double totalCost = totalLaborCost + paintCost;

    System.out.println("Total gallons needed is: " + paintRequired + "\nTotal hours required: " + laborRequired + "\nTotal paint cost is: $" + paintCost + "\nTotal labor cost is: $" + totalLaborCost + "\nTotal cost of the paint job: $" + totalCost);
  }

  public static boolean valid(double input) {
    boolean isValid;
    if (input > 0) {
      isValid = false;
    } else {
      isValid = true;
    }
    return isValid;
  }
};
