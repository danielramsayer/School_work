/*
This program is a Caesar Cipher.
I am Daniel of Asguard.
*/

#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, string *argv)
{
string cipher;
    if(argc != 2)
    {
        printf("We apologize, you must enter the correct parameters, such as ./Program_name 4. \n");
        return 1;
    }

    int key = atoi(argv[1]);
    if (key < 1)
    {
        printf("The input must be a positive integer. \n");
        return 1;
    }
    
    do
    {
        cipher = GetString();
    }
    while (cipher == NULL);
    
    for (int i = 0; n = strlen(cipher); i < n, i++)
    {
        if(isupper(cipher[i]))
            {
                cipher[i] = ((cipher[i] - 65 + key) % 26 + 65);
            }
        else if(islower(cipher[i]))
            {
                cipher[i] = ((cipher[i] - 97 + key) % 26 + 97);
            }
    }
    printf("%s", cipher);
    return 0;
}
