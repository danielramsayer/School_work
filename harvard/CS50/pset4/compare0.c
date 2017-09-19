#include <cs50.h>
#include <stdio.h>

int main(void)
{
    printf("Say something I'm giving up on you. ");
    char* s = GetString();
    
    printf("Say something I'm giving up on you. ");
    char* t = GetString();

    if (s == t)
    {
        printf("Same thing!\n");
    }
    else
    {
        printf("Different!\n");
    }
    return 0;
}