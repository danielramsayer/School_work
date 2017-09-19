/*
Lesson 6 Types Of Variables
*/

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    int distance = 100;
    float power = 2.345f;
    double super_power = 56789.4532;
    char initial = 'A';
    char first_name[] = "Zed";
    char last_name[] = "Shaw";

    printf("You are %d miles away.\n", distance);
    printf("You have %1.1f levels of power. \n", power);
    printf("You have %3.3f awesome powers. \n", super_power);
    printf("I have an initial %c. \n", initial);
    printf("My first name is %s. \n", first_name);
    printf("My last name is %s. \n", last_name);
    printf("My whole name is %s %c %s. \n", first_name, initial, last_name);
    
    return 0;
}