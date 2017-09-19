/*
Daniel Ramsayer
CS50
This program will give back the first letter or inital of people's names.
*/
#include <stdio.h>
#include <cs50.h>

int main(int argc, char* argv[])
{
    char name, space = ' '; //space
    
    //gets the name and prints out the first initial 
    name = GetString ();
    printf("%c", name[0]); //showing original 
 
    //prints out the rest of the initials
    for(int i = 0; i < strlen(name); i++)
    {
       if (name[i] == space)
        {
            printf("%c", name[i+1]);
        }
    }
    printf("\n");
    return 0;
}