#include <stdio.h>
#include <cs50.h>
#include <string.h> //need this for include strlen
#include <ctype.h> //need this for toupper

int main(int argv, char *argc[])
{
    FILE* fp = fopen("iseven.c", "r");

    if (fp == NULL)
    {
        printf("File does not exist.\n");
        return 1;
    }

    fclose(fp);
    return 0;
}