/*
This program is a Vigenere Cipher.
I am Daniel of Asguard.
*/

#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define ALPH 26 //there are 26 letters in the Alphabet. 

int main(int argc, string argv[])
{
    if (argc != 2) //this is meant to trigger if you don't enter the right call. So 
    {
        //printf("Please enter the cipher key when you call the program, such as './Vigenere Bacon'.\n"); This doesn't work for passing the cschecker program, but I liked it anyway.
        printf("Usage: %s <keyword>\n", argv[0]);
        return 1;
    }

    string keyword = argv[1];
    int keylen = strlen(keyword);

    for (int i = 0; i < keylen; i++)
        {
            if (!isalpha(keyword[i])) //this is meant to trigger if you don't enter the right call. So 
            {
            printf("Please only enter a word, no numerical numbers or special characters please.\n"); //
            return 1;
            }
        }
        
    string cipher;
    do
    {
        //printf("Please enter the message you would like to have converted. \n");
        cipher =  GetString(); 
    }
    while (cipher == NULL);
    
    int seen = 0;
    
    for (int i = 0, n = strlen(cipher); i < n; i++) //this is so the code knows to change only the characters in the sting cipher.
        {
            if (isalpha(cipher[i]))
                {
                int key;
                if (isupper(keyword[seen % keylen]))
                    {
                        key = keyword[seen % keylen] - 'A';                        ;
                    }
                    else
                    {
                        key = keyword[seen % keylen] - 'a';                         
                    }
                    
                    if (isupper(cipher[i]))
                        {
                            cipher[i] = ((cipher[i] - 'A' + key) % ALPH) +'A';
                        }
                    else //(islower(cipher[i]));
                        {
                            cipher[i] = ((cipher[i] - 'a' + key) % ALPH) +'a';
                        }
                    seen++;
                }
            }
    printf("%s\n", cipher);
    return 0;
}

