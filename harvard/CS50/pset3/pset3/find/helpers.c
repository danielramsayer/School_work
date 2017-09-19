/**
 * helpers.c
 *
 * Computer Science 50
 * Problem Set 3
 *
 * Helper functions for Problem Set 3.
 */
       
#include <cs50.h>
#include <stdio.h>
#include "helpers.h"
int i;

/**
 * Returns true if value is in array of n values, else false.
 */
bool search(int value, int values[], int n)
{
    // TODO: implement a searching algorithm
/*
//Linear Search
    for (int i=0; i <= n; i++)
    {
        if (values == values[i])
        {
            return true;
        }
    }
}
*/
//Binary Search
    int MAX = n - 1;
    int MIN = 0;

    
    while (MIN <= MAX) //Verify that the min # is less= to the max
    {
        int MIDDLE = (MIN + MAX)/2; //Start Binary search, devide out extra's       
    
        if (value == values[MIDDLE]) //if center #, return hit!
            return true;
        else if (value > values[MIDDLE]) //Else if # > MIDDLE, divide out the half it's not in.
        {
            MIN = MIDDLE + 1;
        }
        else //Divide out the half that it isn't.
        {
            MAX = MIDDLE - 1;
        }
    }
        return false; // not in any? Not in the set. Return false.
}

/**
 * Sorts array of n values.
*/
void sort(int values[], int n)
{
int swap, position, j;
    // TODO: implement an O(n^2) sorting algorithm - binary selection sort
        
    for (int i = 0; i < (n-1); i++)
    {
        position = i;
            
        for (j=i+1; j<n; j++)
        {
            if (values[position] > values[j])
                position = j;
        }
        if (position != i)
        {
            swap = values[i];
            values[i] = values[position];
            values[position] = swap;
        }
    }
    return;
}
