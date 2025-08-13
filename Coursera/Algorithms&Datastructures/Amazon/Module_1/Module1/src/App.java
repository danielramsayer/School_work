public class App {
    public static void main(String[] args) {
        String[] daysOfWeek = new String[7];
        String[] days = {"Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"};

        System.out.println("First Element of Days: " + days[0]);

        //Traversal
        for (int i = 0; i < days.length; i++) {
            daysOfWeek[i] = days[i];
            System.out.println("Element: " + i + " " + daysOfWeek[i]);
        }
        
        //Insertion keep the size
        daysOfWeek[3] = "Thursday";
        for (int i = 0; i < daysOfWeek.length; i++) {
            System.out.println("Element: " + i + " " + daysOfWeek[i]);
        }

        //Insertion change the size
        String newElement = "Funday";
        String[] tempArray = new String[8];
        for (int index = 0; index < tempArray.length; index++) {
            if (index == (tempArray.length - 1)) {
                tempArray[index] = newElement; //insert new element at end
            } else {
                tempArray[index] = days[index]; //copy existing days
            }
        }

        for (int i = 0; i < tempArray.length; i++) {
            System.out.println("Element: " + i + " " + tempArray[i]);
        }

        //Deletion can be done by replacing an element with null or making a new array
       


        // System.out.println("First Element of Days of Week: " + daysOfWeek[0]);
    }
}

//Getting familiar with Java syntax

