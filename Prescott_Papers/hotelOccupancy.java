//***************
//Aug 2017
//This program is set to request the number of floors in a hotel, how many rooms per floor, and the number occupied to produce a occupancy rate.
//***************

import java.util.Scanner;

public class hotelOccupancy{
  public static void main(String[] args){
    Scanner scan = new Scanner (System.in);

    int iteration = 1;
    int totalRooms = 0;
    int occupiedRooms = 0;
    int floortotalRooms = 0;
    int flooroccupiedRooms = 0;
    int floors = 0;


    do {
      System.out.print("How many floors there are in this hotel? ");
      floors = scan.nextInt();
    } while (floors < 1);

    while (iteration <= floors) {
      do {
        System.out.print("How many rooms are there on floor " + iteration + "?");
        floortotalRooms = scan.nextInt();
      } while (floortotalRooms < 10);

      do {
        System.out.print("How many rooms are occupied on this floor? ");
        flooroccupiedRooms = scan.nextInt();
      } while (flooroccupiedRooms > floortotalRooms || flooroccupiedRooms <= 0);

      totalRooms += floortotalRooms;
      occupiedRooms += flooroccupiedRooms;
      iteration++;
    }

    double occupancyRate = (double) occupiedRooms / totalRooms;

    System.out.print("Total Rooms: " + totalRooms + "\nTotal vacant rooms: " + (totalRooms - occupiedRooms) + "\nTotal occupied rooms: " + occupiedRooms +"\nOccupancy rate: " + occupancyRate + "\n");
  }
};
