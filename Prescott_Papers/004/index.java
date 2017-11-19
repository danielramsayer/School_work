/************************
 * Name:
 * Program name: Index.java
 * Date: 18 Oct 17
 * Purpose: file reading and writing program using 1 class and 2 methods.
 */
import java.io.*;
import java.util.Scanner;

public class index {
  public static void main(String [] args) {
    String fname = "TheNameOfTheFile.txt";
    String nextline = null;
    try {
      FileReader fReader = new FileReader(fname);
      BufferedReader bReader = new BufferedReader(fReader);
      while((nextline = bReader.readLine()) != null) {
        System.out.println(nextline);
      }
      bReader.close();
      String toEdit;
      Scanner userInput1 = new Scanner(System.in);
      System.out.print("Would you like to add something? Y/N \n");
      toEdit = userInput1.next( );
      toEdit = toEdit.toUpperCase();
      if (toEdit.equals("Y")) {
        EditnSave();
      }
    }
    catch(FileNotFoundException ex) {
      System.out.println("Unable to find file " + fname);
    }
    catch(IOException ex) {
      System.out.println("There was an error reading the file.");
    }
  }
  public static void EditnSave(){
    File filename = new File("Math_Results.csv");
    BufferedWriter bw = null;
		FileWriter fw = null;
    String toAdd = null;
    System.out.print("What would you like to add? \n");
    Scanner userInput2 = new Scanner(System.in);
    toAdd = userInput2.nextLine( );
    Scanner confirm1 = new Scanner(System.in);
    System.out.println("Do you want to save the results (Y/N)?");
    String c1 = confirm1.next();
    c1 = c1.toUpperCase();
    if (c1.equals("Y")) {
      try {
        if(!filename.exists()) {
          filename.createNewFile();
        }

        fw = new FileWriter(filename,true);
        bw = new BufferedWriter(fw);
        bw.write(toAdd + "\n");
        bw.close();
        Scanner confirm2 = new Scanner(System.in);
        System.out.println("Do you want to review the results (Y/N)");
        String c2 = confirm2.next();
        c2 = c2.toUpperCase();
        if (c2.equals("Y")){
          BufferedReader cread = null;
          FileReader cfread = null;
          cfread = new FileReader(filename);
          cread = new BufferedReader(cfread);
          String nowLine;
          while ((nowLine = cread.readLine()) != null) {
            System.out.println(nowLine);
          }
        }
      }
      catch(IOException e) {
        e.printStackTrace();
      }
      finally {
        try {
          if (bw != null) {
            bw.close();
          }
          if (fw != null) {
            fw.close();
          }
        }
        catch(IOException e) {
          e.printStackTrace();
        }
      }
    } else {
      System.out.println("\nThank you.");
    }
  }
}
