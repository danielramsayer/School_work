#include <stdio.h>
#include <cs50.h>

int main(void)
{
int height;
    do
    {
        printf("Please choose a number between 1 and 23. ");
        height = GetInt();
    }
    while (height < 0 || height >= 24);
    
    for (int i = 0; i < height; i++)
    {
        for (int a = 0; a < (height - (i + 1)); a++)
            {
                printf(" ");
            }
        for (int b = 0; b <= (i+1); b++)
        {
            printf("#");
        }
        printf("\n");
    }

    return 0;
}