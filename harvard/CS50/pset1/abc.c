/*
 * Proper integer incorporation?
 * D Rams, 8/11/2015, CS50
 */
 
#include <stdio.h>
#include <cs50.h>
 
int main()
{
    string a = GetString();

    while (a <= 100.00)
    {
        printf("%2.2f degrees ferenheit is %2.2f in celsius.\n", a, (a - 32) * 5/9);
        a = a + 5.00;
    }
	
return 0;

}
