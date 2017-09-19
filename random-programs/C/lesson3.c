/*
Lesson 3
*/
#include <stdio.h>

int main(void) //This doesn't work with int argc, char *argv[]. :<
{
    int age = 10;
    int height = 72;
    
    printf("The child is %d years old.\n", age);
    printf("This tall child is %d inches in height.\n", height);
    
    return 0;
}