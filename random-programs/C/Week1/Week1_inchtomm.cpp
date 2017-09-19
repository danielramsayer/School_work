#include <iostream>
using namespace std;
/*
Testing 1
*/

int main()
{
   float inches, mm;
   cout <<"Welcome! We will be converting" << " inches to mm today." << endl;
   
   //Get input
   cout <<"Please enter the number of inches that you wish to convert: ";
   
   cin >> inches;  //input 'inches' is placed in by user.
   
   //echos what was entered
   cout >>"You entered: " << inches << "in" <<end1;
   
   //convert inches to millimeters
   mm = 25.4 * inches;
   
   //Results!
   cout << inches << "in converts to " << mm << mm <<"mm" <<endl;
   
   return 0;
}