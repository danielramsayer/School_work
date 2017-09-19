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

int main(void)

{
long CC_Num;


	    printf("Hello, please input your credit card information. \n");
	    CC_Num = GetInt();

    if (CC_Num != NULL)
    {
        for (int i = 0; CCL = strlen(CC_Num); i < CCL; i++;);
        {
            printf("%d", CC_Num[i]+1)
        }
	}
return 0;
}	
/*	
:) credit.c exists
:) credit.c compiles
:) identifies 378282246310005 as AMEX
:) identifies 371449635398431 as AMEX
:) identifies 5555555555554444 as MASTERCARD
:( identifies 5105105105105100 as MASTERCARD
   \ expected output, but not "INVALID\n"
:( identifies 4111111111111111 as VISA
   \ expected output, but not "INVALID\n"
:( identifies 4012888888881881 as VISA
   \ expected output, but not "INVALID\n"
:) identifies 1234567890 as INVALID
:) rejects a non-numeric input of "foo"
:) rejects a non-numeric input of ""


*/ 
