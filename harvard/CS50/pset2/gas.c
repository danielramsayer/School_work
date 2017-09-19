#include <stdio.h>

#define GALLONS 25
#define PRICE 3.67
#define TAX 9.8 

int main()
{

double BeforeTaxPrice;
double AfterTaxPrice;
double TotalPrice;

    BeforeTaxPrice = GALLONS * PRICE;
    AfterTaxPrice = BeforeTaxPrice * (TAX / 100);
    TotalPrice = AfterTaxPrice + BeforeTaxPrice;
    
    printf("For %i gallons of gas, I'd pay %.2f in Washington.", GALLONS, TotalPrice);

return 0;
}
