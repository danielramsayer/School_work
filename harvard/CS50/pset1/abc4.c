/*
 * Proper integer incorporation?
 * D Rams, 8/11/2015, CS50
 */
 
#include <stdio.h>
 
int main()
{
	int a[5];
	int i;
	
	for (i=0; i<5; i++)
		a[i] = i;
	for (i=0; i<5; i++)
		printf("a[%d] = %d\n", i, a[i]);

return 0;
}
