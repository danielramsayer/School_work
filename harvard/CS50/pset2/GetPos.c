#include <cs50.h>
#include <stdio.h>

int GetPositiveInt(void);

int main(void)
{
	int n = GetPositiveInt();
	printf("Thanks for the positive %i! \n", n)
}

int GetPositiveInt(void)
{
	do
	{
		printf("Please give me a positive number. \n");
		n=GetInt();
	}
	while (n < 1);
	
	return n;
}