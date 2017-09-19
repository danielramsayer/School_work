/**************************************
 *
 * credit.c
 *
 *
 * Dan Rams
 * CS50
 * Credit card valid number checker 
 **************************************
 
#include <stdio.h>
#include <string.h>
#include <cs50.h>
#include <math.h>

int main(void)

{
string CC_Num;
int len;

	do
	{
	printf("Hello, please input your credit card information. \n");
	CC_Num = GetStr();	
	
	len = strlen(CC_Num);
	
	}
	while (len < 12 || len == 14 || len > 17 )
	printf(INVALID);
	
	if (len == 13);
	{
		if (CC_Num[1]=4);
	}
	printf("Visa.");
	
	if (len == );
	{
		if (CC_Num[1]=4);
	}
	printf("Visa.");
	
	return 0;
	
}
