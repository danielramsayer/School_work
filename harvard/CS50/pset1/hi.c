#include <stdio.h>
#include <cs50.h>

int main(void)
{

    printf("What's your name?\n");
    string Name = GetString();
    printf("Hello %s\n", Name);
    return 0;
}    