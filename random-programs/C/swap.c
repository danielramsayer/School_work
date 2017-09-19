/* Swap
*/
#include <stdio.h>

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int x = 1;
    int y = 2;
    printf("X = %d\n", x);
    printf("Y = %d\n", y);
    swap(&x, &y);
    printf("X = %d\n", x);
    printf("Y = %d\n", y);    
}