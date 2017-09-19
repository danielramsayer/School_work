/**
 * generate.c
 *
 * Computer Science 50
 * Problem Set 3
 *
 * Generates pseudorandom numbers in [0,LIMIT), one per line.
 *
 * Usage: generate n [s]
 *
 * where n is number of pseudorandom numbers to print
 * and s is an optional seed
 */
 
#define _XOPEN_SOURCE

#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// constant
#define LIMIT 65536

int main(int argc, string argv[])
{
    /* TODO: This is verifying that we have the correct number of command line 
    arguments.*/
    if (argc != 2 && argc != 3)
    {
        printf("Usage: generate n [s]\n");
        return false;
    }

    /*TODO: convert the first command line argument to number of random values 
    generated*/
    int n = atoi(argv[1]);

    /*TODO: we're providing a number to seed the srand48 function based on the time 
    or from user imput - Seed the random number generator with either second 
    command line argument or current time*/
    if (argc == 3)
    {
        srand48((long int) atoi(argv[2]));
    }
    else
    {
        srand48((long int) time(NULL));
    }

    /*TODO: Iterates through the argv[1] set to print the fed random number times 
    the defined limit*/
    for (int i = 0; i < n; i++)
    {
        printf("%i\n", (int) (drand48() * LIMIT));
    }

    // success
    return 0;
}