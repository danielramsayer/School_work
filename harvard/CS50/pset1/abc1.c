/*
 * Proper integer incorporation?
 * D Rams, 8/11/2015, CS50
 */
 
#include <stdio.h>
 
#include <stdio.h>

int main()
{
    float a, b;
    a = 0;
    b=-1;
    while (a < 200)
    {
	if ((a > 98.6) && (b < 98.6))
        {
            printf("%6.2f degrees F = %6.2f degrees C\n",
                98.6, (98.6 - 32.0) * 5.0 / 9.0);
        }
        printf("%6.2f degrees F = %6.2f degrees C\n",
        a, (a - 32.0) * 5.0 / 9.0);
        b = a;
        a = a + 10;
    }
    return 0;
}
