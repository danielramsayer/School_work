/****************************************************************************
 * dictionary.c
 *
 * Computer Science 50
 * Problem Set 5
 *
 * Trie version of the program 
 *
 * Implements a dictionary's functionality.
 ***************************************************************************/

#include <ctype.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <strings.h>
#include <string.h>

#include "dictionary.h"

// global variable for size of dictionary
int wordcount = 0;

// create the nodes for the hash table.
typedef struct node
{
    char word[LENGTH + 1]; // remember LENGTH is 45 (written in dictionary.h)
    struct node* next;
}node;

node* root;

/**
 * Returns true if word is in dictionary else false.
 */
bool check(const char* word)
{
    //TODO
    int index = 0;
    
    struct node* cursor = root;
    
    while (word[index] != '\0')
    {
        for (int n = 0; word[n] != '\0'; n++)
        {
            word ^= (tolower(word[index]));
        }
    }
}

/**
 * Loads dictionary into memory.  Returns true if successful else false.
 */
bool load(const char* dictionary)
{
    //TODO
}


/**
 * Returns number of words in dictionary if loaded else 0 if not yet loaded.
 */
unsigned int size(void)
{
    //TODO
}

/**
 * Unloads dictionary from memory.  Returns true if successful else false.
 */
bool unload(void)
{
    //TODO
}