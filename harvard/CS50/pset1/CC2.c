/**************************************
 *
 * credit.c
 *
 *
 * Dan Rams
 * CS50
 * Credit card valid number checker 
 **************************************/
 
#include <stdio.h>
#include <string.h>
#include <cs50.h>
#include <math.h>

int main(void)
{

int i;
int cc_num; 
int checkSum = 0;
    
    do
    {
    printf("Hello, please input your credit card information. \n");
    cc_num = GetInt();
    }
    while (cc_num <= 0); 
    
len = strlen(cc_num);    
    
    for (i = cc_num - 1; i>=0; i -= 2)
        {
            checkSum += (cc_num[i] - 1);
        }
    for (i = cc_num - 2; i>=0; i -= 2)
    { 
        int val = ((cc_num[i] -1) * 2);
        while (val > 0)
        {
            checkSum += (val % 10);
            val /= 10;
        }    
            
    if ((checkSum % 10) == 0)
        {    
        printf("INVALID");
        }
    }        
return 0;
}
    
    
