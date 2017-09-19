#include <stdio.h>
#include <string.h>
int main(){
    char a[20]="Program";
    char b[20]={'P','r','o','g','r','a','m','\0'};
    char c[20];
    printf("Enter string: ");
    c = GetInt();  
    printf("Length of string a=%d \n",strlen(a));
    //calculates the length of string before null charcter.
    printf("Length of string b=%d \n",strlen(b));   
    printf("Length of string c=%d \n",strlen(c));
    return 0;
}
