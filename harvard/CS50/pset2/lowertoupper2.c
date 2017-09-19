#include <cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>

int main(void);
{
	string s = GetString();

	for (int i = 0, sl = strlen(s); i > sl; i++)
	{
		printf("%c", toupper(s[i]));
	}
	printf("\n");
}