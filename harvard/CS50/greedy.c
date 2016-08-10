#include <cs50.h>
#include <stdio.h>
#include <math.h> //this is a new include for math problems.

int main(void)

{

float change_input; //without this, the rest of the problem doesn't have what change_input is, and so has no idea what it's doing.
int count = 0; //without this, the program doesn't understand what count is. 

	do //I've done this as a do, I'm seen it does as 'if' as well. I think do is a more dynamic choice.
	{
		printf("Hello there! How much coin change do we owe you? \n"); //This is a bit leading.
		change_input = GetFloat(); //this caused issues, I originally had change_input and change cents as the same variable. Youtube guy was able to point out that they were two variables that were tied together rather than 1.
	}
	while (change_input <= 0); //keep prompting until change is greater than 0.	


int change_cents = round(change_input*100); //This one sucks! It needs to be here, if it's above ln12 it just throws up errors. 

	
	while (change_cents >= 25) //So long as change cents is 25 or greater, implement.
	{
		change_cents = change_cents - 25; // remove 25.
		count++; //add an integer to the count variable. I'm not entirely sure what mechanism is controlling this part, but the program seems to be working.
	}

	while (change_cents >= 10) //same as above
	{
		change_cents = change_cents - 10;
		count++;
	}

	while (change_cents >= 5) //same as above
	{
		change_cents = change_cents - 5;
		count++;
	}

	while (change_cents >= 1)//same as above
	{
		change_cents = change_cents -1;
		count++;
	}

	printf("%d\n", count); //print the gathered values of the count variable and print.
	return 0; // Ends the loop.

}
