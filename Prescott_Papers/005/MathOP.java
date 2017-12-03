/************************
 *
 * Program name: MathOP.java
 * Date: 26 Nov 2017
 * Purpose: MathOP stuff.
 */

import java.io.File;
import java.io.FileWriter;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.util.List;
import java.util.Scanner;

public class MathOP {
  public static void main(String[] args) {
    //file to be read
    String fileName= "ToRead.csv";
    //running tally
    int runningNum = 0;
    //this is the add/subtract field
    String action = "";
    //Identifying the end
    String terminator = "=";
    //how many elements there are
    int elements = 0;
    //current number
    int current = 0;
    //average
    float avg = 0;
    //the file
    File file= new File(fileName);
    //to read in data
    Scanner inputStream;
    //results file!
    PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter("results.csv")));

    //This checking to make sure that there is a file to read
    try {
      inputStream = new Scanner(file);
      //while more data, continue reading through
      while(inputStream.hasNext()){
        //read data in
        String line = inputStream.next();
        //increase elements by 1
        elements = elements + 1;
        //So long as the read in doesn't include =
        if (line.indexOf(terminator) == -1) {
          //makes the first value into an int
          current = Character.getNumericValue(line.charAt(1));
          //These check for the sign, update action, and update the runningNum
          if (line.contains("+")) {
            action = "Add ";
            runningNum = runningNum + current;
          } else if (line.contains("-")) {
            action = "Subtract ";
            runningNum = runningNum - current;
          } else if (line.contains("*")) {
            action = "Multiply ";
            runningNum = runningNum * current;
          } else {
            action = "Divide ";
            runningNum = runningNum / current;
          }
          //Once done, it pushes the sentence to the new csv
          out.println(results, action + current + " total " + runningNum + "\n");
          //results.write(action + current + " total " + runningNum + "\n");
          //System.out.println(action + current + " total " + runningNum + "\n");
        }
        //If it is =, then the program pushes the final summation statement to the new csv, and then sets the file elements to their default values
        else {
          avg = (float) runningNum / (float) elements;
          out.println("Number of elements = " + elements + ", Total = " + runningNum + ", Average = " + avg +"\n");
          current = 0;
          elements = 0;
          runningNum = 0;
          action = "";
          avg = 0;
        }
      }
      //closes the inputStream
      inputStream.close();
    }
    //catches if there isn't a file
    catch (FileNotFoundException e) {
      e.printStackTrace();
    }
  }
}
