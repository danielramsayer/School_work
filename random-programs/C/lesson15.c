#include <stdio.h>
int main(int argc, char *argv[])
{/*
    //create two arrays we care about
    int ages[] = {23, 43, 12, 89, 2};
    char *names[] = {"Alan", "Frank", "Desmond", "Tabatha", "Leo"};
    
    //Safely get the size of ages
    int count = sizeof(ages) / sizeof(int);
    int i = 0;
    
    //first way using indexing
    for(i = 0; i < count; i++)
    {
        printf("%s has been alive for %d years.\n", names[i], ages[i]);
    }
    
    printf("---\n");
    
    //setup the pointers to the start of the array
    int *cur_age = ages;
    char **cur_name = names;
    
    //second way of using pointers
    for(i = 0; i < count; i++)
    {
        printf("%s is %d years old. \n", *(cur_name+i), *(cur_age+i));
    }

    printf("---\n");
    
    //third way, pointers are just arrays
    for(i = 0; i < count; i++)
    {
        printf("%s is %d years old again. \n", cur_name[i], cur_age[i]);
    }

    printf("---\n");
    
    //forth way with pointers in a stupidly complex manner
    for(cur_name = names, cur_age = ages;
            (cur_age - ages) < count;
            cur_name++, cur_age++)
    {
        printf("%s lived %d years so far.\n", *cur_name, *cur_age);
    }*/


#include <stdio.h>
int main()

{
    int a = 10;
    int *p;
    p = &a;
    //Pointer arithmetic
    printf("Address of p is %d.\n", p);
    printf("The Value at address p is %d.\n", *p);
    printf("The size of the integer is %d bytes.\n", sizeof(int));
    printf("The address of p+1 is %d.\n", p+1);
    printf("The Value at address p+1 is %d.\n", *(p+2));
    return 0;
}

#include <stdio.h>
int main()

{
    int a = 1025;
    int *p;
    p = &a;
    //Pointer arithmetic
    printf("The size of the integer is %d bytes.\n", sizeof(int));
    printf("The address = %d, value is %d.\n", p, *p);
    printf("The address = %d, value is %d.\n", p+1, *(p+1));

    char *p0;
    p0 = (char*)p;
    printf("The size of the integer is %d bytes.\n", sizeof(char));
    printf("The address = %d, value is %d.\n", p0, *p0);
    printf("The address = %d, value is %d.\n", p0+1, *(p0+1));
    
    void *p1;
    p1 = p;
    printf("Address = %d.", p1);

    return 0;
}
    
    
    return 0;
}
#include <stdio.h>
int main()

{
   int x = 5;
   int* p = &x;
   *p = 6;
   int** q = &p;
   int*** r = &q;
   printf("%d\n", *p);
   printf("%d\n", *q);
   printf("%d\n", *(*q));
   
   printf("%d\n", *(*r));
   printf("%d\n", *(*(*r)));
   
    return 0;
}