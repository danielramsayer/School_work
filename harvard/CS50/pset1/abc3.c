/*
 * Proper integer incorporation?
 * D Rams, 8/11/2015, CS50
 */
 
#include <stdio.h>
 
int main()
{
    float a;
    a = 0.00;

    while (a <= 100.00)
    {
		if (a > 98.6)
		{
			printf("%2.2f degrees ferenheit is %2.2f in celsius.\n", 98.6, (98.6 - 32.0) * 5.0/9.0);
		}
		printf("%5.3f degrees ferenheit is %5.3f in celsius.\n", a, (a - 32.0) * 5.0/9.0);
 		a = a + 5.00;
	}
	
return 0;

}
