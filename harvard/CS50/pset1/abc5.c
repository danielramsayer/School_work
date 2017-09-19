/*
 * Proper integer incorporation?
 * D Rams, 8/11/2015, CS50
 */
 
#include <stdio.h>
#define MAX 10
 
int a[MAX]; 
int rand_seed=15;

/* from K&R
	- returns random number between 0 and 32767. */
int rand()
{
	rand_seed = rand_seed * 1103515245 + 12345;
	return (unsigned int)(rand_seed / 65536) % 32768;
}

int main()	
{
	int i;
	// fill array
	for (i = 0; i < MAX; i++)
	{
		a[i]=rand();
		printf("%d\n", a[i]);
	}
	
return 0;
}
