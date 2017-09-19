#include <cs50.h>
#include <stdio.h>
#include <math.h>

int main(void)

{

float n = 0.01;
int count = 0, amount;

	do
	{
		printf("O hai! How much coin change do we owe you? ");
		n = GetFloat();
	}
	while (n < 0);

	//n *= 100.0; // This makes everything jump up two decimals and easier to understand, it also rounds it so that we don't get any weird errors with the numbers later on.
	amount = (int) round(n); 

	while (n >= 25)
	{
		count++;
		amount -= 25;
	}

	while (n >= 10)
	{
		count++;
		amount -= 10;
	}

	while (n >= 5)
	{
		count++;
		amount -= 5;
	}

	while (n >= 1)
	{
		count++;
		amount -= 1;
	}



	printf("%d", count);

	return 0;

}
