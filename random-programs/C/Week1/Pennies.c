/* Pennies!
*/

#include <stdio.h>

int main()
{
float change, pennies = 0;
    printf("Hello there, can you please give be the number change total?\n");
    scanf("%f", &change);
    
    if (change >= 0)
    {
        pennies = (change * 100);
        printf("You would have %2f pennies.", pennies);
    }
    else 
    {
        printf("Please give a positive integeter.");
    }
    return 0;
}