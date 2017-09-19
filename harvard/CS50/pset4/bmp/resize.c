/**
 * resize.c 
 *
 * Computer Science 50
 * Problem Set 4
 *
 * This changes the size of the of a picture based on users input requirement
 */
       
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

#include "bmp.h"

int main(int argc, char* argv[])
{
    // remember filenames
    char* infile = argv[2];
    char* outfile = argv[3];
    
    //Remember the value of what user is increasing by
    int times = atoi(argv[1]);
    
    // ensure proper usage
    if (argc != 4)
    {
        printf("Usage: ./resize 2(MUST_BE_A_NUMBER) infile outfile\n");
        return 1;
    }
    
    if (times < 0 || times > 100)
    {
        printf("Please make sure that your second input is between 1 and 100.");
        return 2;
    }

    // open input file 
    FILE* inptr = fopen(infile, "r");
    if (inptr == NULL)
    {
        printf("Could not open %s.\n", infile);
        return 3;
    }

    // open output file
    FILE* outptr = fopen(outfile, "w");
    if (outptr == NULL)
    {
        fclose(inptr);
        fprintf(stderr, "Could not create %s.\n", outfile);
        return 4;
    }

    // read infile's BITMAPFILEHEADER
    BITMAPFILEHEADER bf, bf_Large;
    fread(&bf, sizeof(BITMAPFILEHEADER), 1, inptr);
    bf_Large = bf;

    // read infile's BITMAPINFOHEADER
    BITMAPINFOHEADER bi, bi_Large;
    fread(&bi, sizeof(BITMAPINFOHEADER), 1, inptr);
    bi_Large = bi;

    // ensure infile is (likely) a 24-bit uncompressed BMP 4.0
    if (bf.bfType != 0x4d42 || bf.bfOffBits != 54 || bi.biSize != 40 || 
        bi.biBitCount != 24 || bi.biCompression != 0)
    {
        fclose(outptr);
        fclose(inptr);
        fprintf(stderr, "Unsupported file format.\n");
        return 4;
    }

    //Change in sizes for record
    bi_Large.biWidth = bi.biWidth * times;
    bi_Large.biHeight = bi.biHeight * times;

    // determine padding for scanlines
    int padding =  (4 - (bi.biWidth * sizeof(RGBTRIPLE)) % 4) % 4;
    int large_padding = (4 - (bi_Large.biWidth * sizeof(RGBTRIPLE)) % 4) % 4;
    
    //Based on new dimensions, determine size of new image.
    bi_Large.biSizeImage = ((bi_Large.biWidth * sizeof(RGBTRIPLE) +large_padding) * abs(bi_Large.biHeight));
    bf_Large.bfSize = bf.bfSize - bi.biSizeImage + bi_Large.biSizeImage;
    
    // write outfile's BITMAPFILEHEADER
    fwrite(&bf_Large, sizeof(BITMAPFILEHEADER), 1, outptr);

    // write outfile's BITMAPINFOHEADER
    fwrite(&bi_Large, sizeof(BITMAPINFOHEADER), 1, outptr);

    // iterate over infile's scanlines
    for (int i = 0, biHeight = abs(bi.biHeight); i < biHeight; i++)
    {
        // iterate over pixels in scanline
        for (int j = 0; j < times; j++)
        {
            for (int k = 0; k < bi.biWidth; k++)    
            {    
                // temporary storage
                RGBTRIPLE triple;

                // read RGB triple from infile
                fread(&triple, sizeof(RGBTRIPLE), 1, inptr);

                // write RGB triple to outfile, multiplied by the users times factor
                for (int l = 0; l < times; l++)
                {    
                    fwrite(&triple, sizeof(RGBTRIPLE), 1, outptr);
                }
            }
            // Add a new padding
            for (int l = 0; l < large_padding; l++)
                fputc(0x00, outptr);
            
            //#SUPER_IMPORTANT - This is where the information is directed to go back to the beginning of the scanline 
            if (j < times - 1)
            fseek(inptr, sizeof(RGBTRIPLE) * -bi.biWidth, SEEK_CUR);
        }
        
        // skip over padding, if any
        fseek(inptr, padding, SEEK_CUR);
    }

    // close infile
    fclose(inptr);

    // close outfile
    fclose(outptr);

    // that's all folks
    return 0;
}
