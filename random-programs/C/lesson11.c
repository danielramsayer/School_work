#include <stdio.h>

int main(int argc, char *argv[])
{
    //going through each string of argv
    
    int i = 1; //if this is 0 it calls argv[0], or the program name.
    while(i < argc) 
    {
        printf("arg %d: %s\n", i, argv[i]);
        i++;
    }
    
    //lets make our own array of strings
    char *states[] = {"Ohio", "Iowa", "Cali"};
    
    int num_states = 3;
    i=0; //watch for this!
    while ( i < num_states)
    {
        printf("State %d: %s\n", i, states[i]);
        i++;
    }
    return 0;
}