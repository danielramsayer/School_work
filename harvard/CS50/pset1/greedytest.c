#include <cs50.h>
#include <stdio.h>
#include <math.h>

int main(void)

{
int count = 0, amount;
//float n=0.01;

	do
	{
		printf("O hai! How much coin change do we owe you? \n");
		change = GetFloat();
	}
	while (change < 0);

	// count = round(n * 100); // This makes everything jump up two decimals and easier to understand, it also rounds it so that we don't get any weird errors with the numbers later on.
	//int (amount) = n; 


	while (change >= 25)
	{
		count++;
		amount = -25;
	}

	while (change >= 10)
	{
		count++;
		amount = -10;
	}

	while (change >= 5)
	{
		count++;
		amount = -5;
	}

	while (change >= 1)
	{
		count++;
		amount = -1;
	}



	printf("%d", count);

	return 0;

}
