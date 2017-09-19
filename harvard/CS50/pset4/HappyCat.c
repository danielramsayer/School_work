/**
 * Happy Kitty program from sections with Andi
*/

#include <stdio.h>

int main(void)
{
    char* str = "happy cat";
    int counter = 0;
    
    for (char * ptr = str; *ptr != '\0'; ptr++)
    {
        counter++;
    }
    
    printf ("%d\n", counter);
}
