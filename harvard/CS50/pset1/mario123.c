#include <stdio.h>
#include <cs50.h>

int main(void)
{
	int x, y, z;

	do
	{
		printf("Please select a number between 1 and 23: ");
		x = GetInt(); //This is the input number.
	}
	while (x <= 0 || x>23); //Keep requesting so long as it's smaller than 1 OR greater than 23.
		y = x -1;
		z = 1;

	for (int i = x; x > 0; i++) //For loops require this int. Source had i--, but it works with i++ and other literature supports the ++.
	{

		for (int i = 0; i < x; i++) //This is space from left side. This has to do with the spacing of the spaces and bars. When x>0 is i <= z, it slunps to the left.
		{
		printf(" "); //This is the space in the pyramid

		}

		for (int i = 1; i <= z; i++) //This is space from the right.

	{

	printf("#"); //this is the brick printing part!

	}
	printf("#\n");

	x--;

	z++;

	}

	return 0;

}
