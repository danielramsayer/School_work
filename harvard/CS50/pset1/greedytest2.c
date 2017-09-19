#include <cs50.h>
#include <stdio.h>
#include <math.h>

int main(void)

{

float change_input;
int count = 0;
int change_cents = round(change_input*100);

	do
	{
		printf("Hello there! How much coin change do we owe you? \n");
		change_input = GetFloat();
	}
	while (change_input < 0);	

	
	
	while (change_cents >= 25)
	{
		change_cents = change_cents - 25;
		count++;
	}

	while (change_cents >= 10)
	{
		change_cents = change_cents - 10;
		count++;
	}

	while (change_cents >= 5)
	{
		change_cents = change_cents - 5;
		count++;
	}

	while (change_cents >= 1)
	{
		change_cents = change_cents -1;
		count++;
	}

	printf("%d", count);
	return 0;

}
