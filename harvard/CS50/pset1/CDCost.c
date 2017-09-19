/*
 *Compute cost of item including discount and sales tax.
 */
 
#include <stdio.h>
#include <cs50.h>

int main()
{
int items;
double list_price;
double discount_rate;
double sales_tax_rate;
double total_price;
double discount_price;
double sales_tax;
double final_cost;

list_price = 14.99;
discount_rate = .25;
sales_tax_rate = .098;
{
	printf("How many CD's do you want to buy? \n");
	items = GetInt();
}
total_price = items * list_price;
discount_price = total_price - total_price * discount_rate;
sales_tax = discount_price * sales_tax_rate;
final_cost = discount_price + sales_tax;

printf("List price per item: %f\n", list_price);
printf("List price of %i items: %f\n", items, total_price);
printf("Price after %f%% discount: %f\n", discount_rate *100, discount_price);
printf("Sales tax at %f%%: %f\n", sales_tax_rate * 100, sales_tax);
printf("Total cost: %f\n", final_cost);

return 0;

}
