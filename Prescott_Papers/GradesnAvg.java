//************
// Aug 2017
// Program is designed to take in 5 assignments by integer and return the letter grade and average for the 5 inputs.
//************


import java.util.Scanner;

public class GradesnAvg{
  public static void main(String[] args){
    Scanner scan = new Scanner (System.in);
    int score1,score2,score3,score4,score5 = 0;

    do {
        System.out.print("Hello, please enter the first of five test scores. ");
        score1 = scan.nextInt();
    } while (valid(score1));

    do {
        System.out.print("Please enter the second of five test scores. ");
        score2 = scan.nextInt();
    } while (valid(score2));

    do {
        System.out.print("Please enter the third of five test scores. ");
        score3 = scan.nextInt();
    } while (valid(score3));

    do {
        System.out.print("Please enter the fourth of five test scores. ");
        score4 = scan.nextInt();
    } while (valid(score4));

    do {
        System.out.print("Please enter the last of five test scores. ");
        score5 = scan.nextInt();
    } while (valid(score5));

    System.out.print("The grades for these assignments are: \n First Assignment: " + determineGrade(score1) + "\n Second Assignment: " + determineGrade(score2) + "\n Third Assignment: " + determineGrade(score3) + "\n Forth Assignment: " + determineGrade(score4) + "\n Fifth Assignment: " + determineGrade(score5) + "\nThe Total Average is: " + calcAverage(score1,score2,score3,score4,score5) + "\n");
  }

  public static int calcAverage(int a1, int a2, int a3, int a4, int a5) {
    return ((a1+a2+a3+a4+a5)/5);
  }

  public static String determineGrade(int input) {
    String grade;
    if (input > 89) {
      grade = "A";
    } else if (input > 79) {
      grade = "B";
    } else if (input > 69) {
      grade = "C";
    } else if (input > 59) {
      grade = "D";
    } else {
      grade = "F";
    }
    return grade;
  }

  public static boolean valid(int input) {
    boolean isValid;
    if (input > 1) {
      isValid = false;
    } else {
      isValid = true;
    }
    return isValid;
  }

};
