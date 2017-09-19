/**
 * helpers.c
 *
 * Computer Science 50
 * Problem Set 3
 *
 * Helper functions for Problem Set 3.
 */
       
#include <cs50.h>

#include "helpers.h"

/**
 * Returns true if value is in array of n values, else false.
 */
bool search(int value, int values[], int n)
{
    // TODO: implement a searching algorithm
    int MAX = n - 1;
    int MIN = 0;
    int MIDDLE = (MIN + MAX)/2;
    
    while (MIN <= MAX)
    {
        if (array[MIDDLE] == value)
            return true;
        else if(array[MIDDLE] <  value)
        {
            MIN = MIDDLE + 1;
        }
        else if ([MIDDLE] > value)
        {
            MAX = MIDDLE - 1;
        }
        else
            return true;
    }
        return false;
}

/**
 * Sorts array of n values.
 */
void sort(int values[], int n)
{
    // TODO: implement an O(n^2) sorting algorithm
    for (int i = 1; i <= n-1, i++);
    {
        int index = n[i]; int j = i;
        while (j > 0 && n[j-1] > index)
        {
            n[j] = n[j-1];
            j--;
        }
    n[j] = index;
    }
    return;
}