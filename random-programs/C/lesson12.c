#include <stdio.h>

int main(int argc, char* argv[])
{
    int i = 0;
    int counter = 0;
    
    if(argc == 1)
    {
        printf("You only have one argument. Mehrrr.....\n");
    }
    else if (argc > 1 && argc <4)
    {
        printf("Here's your arguments! \n");
        for (i = 0; i < argc; i++)
        {
            printf("%i: %s \n", counter += 1, argv[i]);
        }
        printf("\n");
    }
    else
    {
        printf("You have waaaaaaaay toooooo many arguments! \n");
    }
    return 0;
}