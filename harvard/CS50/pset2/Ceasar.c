#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <ctype.h>

int main(int argc, string argv[])
{
prototype
int i, k;
    if (argc != 2)
    {
        printf("Usage: %s <key>\n", argv[0]);
        return 1;
    }

    // ensure key is in range [0, inf)
    int key = atoi(argv[1]);
    if (key < 0)
    {
        printf("Key must be a non-negative integer.\n");
        return 1;
    }

    printf("Please give me the phrase that will be altered in this program. \n");
    string s = GetString();
   
    for (int i = 0, n = strlen(s); i < n; i++)
    {
        printf("%c", s[i]+k %26);
    }
    printf("\n");
    
    return 0;
}
