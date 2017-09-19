/**
 * recover.c
 *
 * Computer Science 50
 * Problem Set 4
 *
 * Recovers JPEGs from a forensic image.
 */
 
#include <stdio.h>
#include <cs50.h>
#include <stdint.h> //important for unint_8 worker.

int main(int argc, char* argv[])
{
    //This is the section to open the file itself
    // open input file 
    FILE* recovery;

    if ((recovery = fopen("card.raw", "r")) == NULL)
    {
        printf("Could not open the file \"card.raw\".");
        return 1;
    }
    
    //This is meant to be the section where we determine the files are to be broken out.
    
    //This is the counter for the images to take
    int counter = 0;
    FILE *Recovered = NULL; //This is the workinng part of the output program

    //Temporary storage (buffer)
    uint8_t FFAT[512];
    
    //This is the section where if reads in the Recovered from recovery.
    while (fread(&FFAT, sizeof(FFAT), 1, recovery)) //Reading in the buffer data by buffer size
    {
        if (FFAT[0] == 0xff && FFAT[1] == 0xd8 && FFAT[2] == 0xff) //if the first 3 array addresses contain these
        { //then it's time to party!
            if (Recovered != NULL) 
            fclose(Recovered);
            
            char title[8]; 
            sprintf(title, "0%3d.jpg", counter); //all output files are named _.jpg

            //This is creating all of the new files to write to.
            Recovered = fopen(title, "w");
            //increment the name counter at the end
            counter++;
        }    
        
       if (Recovered != NULL)
            fwrite(&FFAT, sizeof(FFAT), 1, Recovered); 
    }
    
    if (Recovered != NULL)
        fclose(Recovered);

    fclose(recovery);

    return 0;
}
