//UNDERSTANDING NODES IN LINKED LISTS

#include <stdbool.h>
#include <stdio.h>
{
    typedef struct node
    {
        int n;
        struct node* next;
    }
    node;
    
    bool search(int n, node* list)
    {
        node* ptr = list;
        while (ptr != NULL)
        {
            if (ptr->n == n)
            {
                return true;
            }
            ptr = ptr->next;
        }
    }
    return false;
}