#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <ctype.h>

int main (int argc, char* argv[])
{
//prototype
int k = atoi(argv[1]);

    do 
    {
        printf("Please give me the number of positions forward to shift, please. ");
        k = GetInt();
    }
    while (k <= 0);
        
    printf("Please give me the phrase that will be altered in this program. \n");
    string s = GetString();
   
    for (int i = 0, n = strlen(s); i < n; i++)
    {
        if (isalpha(s[i]))
        {
            if (isupper(s[i]))
            {
                printf("%i",(((s[i] - 65) + k) % 26) + 65);
            }
            else if (isupper(s[i]))
            {
                printf("%i", (((s[i] - 96) + k) %26) + 96);
            }
            else
            {
                printf("%c", s[i]);
            }
    }
    printf("\n");
    
    return 1;
}}
