/*
Written by: Daniel Ramsayer, finished 9/20/2015
File name: taxes.c
Objective: give tax estimate for someone in the middle class bracket
*/
#include <stdio.h>

int main(void)
{
float s, t;

    printf("How much money do you make? \a");
    scanf(" %f", &s); //this is how we're imputing information. It's a float.
    
    t = .33 * s; //described tax rate, this is for those making >35K in reality.
    printf("You owe %.2f in taxes.\n", t); //This is the returned float with two spaces after the decimal, to denote cents.

    return 0;
}