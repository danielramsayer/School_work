#include <stdio.h>
#include <cs50.h>

int main(void)
{
int showerlength;
    do
    {
        printf("How long was your shower?\n");
        showerlength = GetInt();
    }
    while (showerlength <= 0);
    
    /*The math for the bottle of water is 1.5G a minute, 1G = 128oz, 1.5*128=192oz per minute.
    A bottle is 16 oz, so per minute you're using 12 bottles or water. */

    {
        printf("minutes: %i\n", showerlength);
        printf("bottles: %i\n", showerlength * 12);
    }
}