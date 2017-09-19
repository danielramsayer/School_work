/*
Daniel Ramsayer
CS50
This program will give back the first letter or inital of people's names.
*/
#include <stdio.h>
#include <cs50.h>
#include <string.h> //need this for include strlen
#include <ctype.h> //need this for toupper


int main (int argc, char *argv[]) //including this because of creepy directive from TA
{
// space =' '; //important for subsequent pulls for initials

    char* initials = GetString(); 
    printf("%c", toupper(initials[0])); //The first character is falls outside of loop, keeping it here includes it into the final product without breaking the for loop.

    for(int i = 0; i < strlen(initials); i++) //for loop for the STR len
    {
       if (isspace(initials[i])) //IMPORTANT - This gets the loop to initiate after every space, ties in with ln13
        {
            printf("%c", toupper(initials[i+1])); //prints uppercase version of the first letter
        }
    }
    printf("\n");

    return 0;
}