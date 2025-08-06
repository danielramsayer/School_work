// public class App {
//     public static void main(String[] args) throws Exception {
//         System.out.println("Hello, World!");
//     }
// }

public class App {
    public static void main(String[] args) {
        String[] daysOfWeek = new String[7];
        String[] days = {"Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"};

        System.out.println("First Element of Days: " + days[0]);

        for(int i=0; i < days.length; i++) {
            daysOfWeek[i] = days[i];
            System.out.println("Element: " + i + " " + daysOfWeek[i]);
        }

        // System.out.println("First Element of Days of Week: " + daysOfWeek[0]);
    }
}

//Getting familiar with Java syntax

