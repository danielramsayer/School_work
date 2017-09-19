#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <ctype.h>

int main(int argc, char* argv[])
{
//prototype
int k, n;
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

    for (int i = 0; n = strlen(s); i < n; i++)
        {
        if (islower(s[i]))  
            {
                int letter = s[i];
                int newascii = ((letter + k) % 26);
                printf("%c", newascii);
            }
             
        else (isupper(s[i]))  
            {
                int letter = s[i];
                int newascii = ((letter + k) % 26);
                printf("%c", newascii);
            }
        }
    printf("\n");
    return 0;
}
