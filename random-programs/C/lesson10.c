#include <stdio.h>

int main(int argc, char *argv[])
{
    int i = 0;
    
    /*This is meant to go through each string in argv. Why are we skipping argv[0]? */
    for(i = 1; i < argc; i++)
    {
        printf("arg %d: %s\n", i, argv[i]); //command line string requirement in order to get any response from this for loop.
    }
    
    //Lets make our own array of strings!
    char *states[] = {"California", "Texas", "Nevada", "Oregon"};
    int num_states = 4;
    
    for(i=0; i < num_states; i++)
    {
        printf("state %d: %s\n", i, states[i]);
    }
    return 0;
}