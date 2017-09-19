/****************************************************************************
 * dictionary.c
 *
 * Computer Science 50
 * Problem Set 5
 *
 * Implements a dictionary's functionality.
 ***************************************************************************/

#include <assert.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <strings.h>
#include <string.h>

#include "dictionary.h"



// number of buckets in hash table
#define BUCKET_NUM 200000

// global variable for size of dictionary
int wordcount = 0;

// create the nodes for the hash table.
typedef struct node
{
    char word[LENGTH + 1]; // remember LENGTH is 45 (written in dictionary.h)
    struct node* next;
}node;

// make hash table
node* hash_table[BUCKET_NUM];

int hashed_word(const char* word)
{
    // magic numbers from http://www.isthe.com/chongo/tech/comp/fnv/
    //reference to size_t found here: http://web.archive.org/web/20140828142605/http://www.codeproject.com/Articles/60082/About-size_t-and-ptrdiff_t
    size_t offset_basis = 2166136261;
    size_t FNV_prime = 16777619;
    
    //This is the Fowler/Noll/Vo (FNV) Hash 
    size_t hash = offset_basis;
    
    for (int n = 0; word[n] != '\0'; n++)
    {
        //Bitwise exclusive - major time saving device
        hash *= (tolower(word[n]));

        // multply by the magic number
        hash *= FNV_prime;
    }
    //This is important as well to save additional time - this reduces into the BUCKET_NUM size the hashed words.
    return (hash % BUCKET_NUM); 
}

/**
 * Returns true if word is in dictionary else false.
 */
bool check(const char* word)
{
    // TODO
    // find the bucket in the hash table where the word should be
    node* bucket = hash_table[hashed_word(word)];
    
    // iterating over linked list at the index and check for words
    for (node* root = bucket; root != NULL; root = root->next)
    {
        // words have been converted into lower case - use strcasecmp to compare quickly.
        if (strcmp(word,root->word) == 0)
        {
            return true;
        }
    }   
    return false;
}

/**
 * Loads dictionary into memory.  Returns true if successful else false.
 */
bool load(const char* dictionary)
{
    // TODO
    // open dictionary file and check that it opens correctly.
    FILE* dicti = fopen(dictionary, "r");
    if(dicti == NULL)
    {
        printf("Most sorry, but this dictionary appears not to be opening. Please check for dictionary file.");
        return false;
    }
    
    // scan the file (dicti) and load the words onto the hash table that was made
    while(true)
    {
        // allocate memory for the new node for words
        node* new_node = malloc(sizeof(node));
        //ERROR CHECK- Make sure that you were able to grab clean memory!
        assert(new_node != NULL);
        
        // read a word from the dictionary and load it into a new node
        // if variable word is not successfully read from the file, error, and exit the while loop
        if (fscanf(dicti, "%s", new_node->word) != 1)
        {
            free(new_node);
            break;
        }
        
        // hash the new word using the hash function
        int hash = hashed_word((new_node->word));
        
        // enter root word into beginning of the linked list in the hash table
        // current root word will point to what the hash table currently points to
        new_node->next =  hash_table[hash];
        // store in the hash table at the hash, the current root word
        hash_table[hash] = new_node;
        
        // increment size of hash table
        wordcount++; 
    }
    
    // ERROR CHECK - verify if the program broke out of the while loop from an error or if it was at the end of the file
    if(ferror(dicti))
    {
        unload();
        fclose(dicti);
        return false;
    }
    
    // close file if successful
    fclose(dicti);
    return true;
}

/**
 * Returns number of words in dictionary if loaded else 0 if not yet loaded.
 */
unsigned int size(void)
{
    // TODO
    return wordcount;
}

/**
 * Unloads dictionary from memory.  Returns true if successful else false.
 */
bool unload(void)
{
    // TODO
    // loop through all buckets in the hash table
    for (int y=0; y < BUCKET_NUM; y++)
    {
        // for each linked list in hash table, loop over the entire linked list and free each node
        node* root = hash_table[y];
        while (root != NULL)
        {
            // create temporary variable that stores pointer to next element in linked list
            node* next = root->next;
            // free current element
            free(root);
            // update current element to point to next element for destruction
            root = next;
        }
    }
    return true;
}