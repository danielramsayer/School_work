# include <stdio.h>
# include <cs50.h>

int main(void)
{
    printf("What is you name? ");
    string s = GetString();
    printf("Hello %s, how are you?\n", s);

}
