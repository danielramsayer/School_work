#include <stdio.h>
#<include <cs50.h>

int main(void)
{
	int x, y, z;
	
	do
	{
		printf("Please select a number between 1 and 23: ");
		x = GetInt(); //This is the input number.
	while (x <= 0 || x > 23); //Keep requesting so long as it's smaller than 1 OR greater than 23.
		y = x -1;
		z = 1;
	}
    {
	for (int i = x; i > 0; i--) //For loops require this int, this one is weird because it's decreasing (usually it's ++i)
	{
		for (int i = 0; i <= z; i++) //This is...I'm not sure. The source I'm using has x, y, and z listed as 'things', but I'm not sure what this (z) is actually supposed to stand for. X is height and Y is width, does this have time or depth as it's 3rd dimension? Tron?
		{
		printf(" "); //This is the space in the pyramid
		}
	}
	
	for (int i = 1; i <= 1; i++)
	{
	printf("#"); //this is the brick printing part!
	}
	x--;
	z++;
	}
	return 0;
}
