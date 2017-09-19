#include <cs50.h>
#include <stdio.h>

int sigma(int);

int main(void)
{
    int n;
    do
    {
    printf("Please give me a positive integer: ");
    n = GetInt();
    }
    while (n < 1);
    
    int answer = sigma(n);
    
    printf("%i\n", answer);
}

int sigma(int z)
{
    if (z <= 0)
    {
        return 0;
    }
    else
    {
        return (z + sigma(z-1));
    }
}