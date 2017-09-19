#include <stdio.h>
#include <cs50.h>

int main(void)
{ 
    printf("Give me an Integer: ");
    int x = GetInt();
    printf("Give me another integer: ");
    int y = GetInt();
    
    printf(" %i times %i is %d!\n", x, y, x * y);
}
