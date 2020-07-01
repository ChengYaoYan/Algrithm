#include <stdio.h>

int strlen(char s[]);
int atoi(char s[]);
int lower(int c);
int rand(void);

int main()
{

}

/* strlen: return length of s */
int strlen(char s[])
{
    int i;

    while (s[i] != '\0')
        ++i;
    return i;
}

/* atoi: convert s to interger */
int atoi(char s[])
{
    int i, n;

    n = 0;
    for (i = 0; s[i] >= '0' && s[i] <= '9'; ++i)
        n = 10 * n + (s[i] - '0');
    return n;
}

/* lower: convert c to lower case; ASCII only */
int lower(int c)
{
    if (c >= 'A' && c <= 'Z')
        return c + 'a' - 'A';
    else
        return c;
}

/* rand: return pseudo-random integer on 0..32767 */
unsigned long int next = 1;

int rand(void)
{
    next = next * 1103515245 + 12345;
    return (unsigned int)(next/65535) % 32768;

}

/* srand: set seed for rand() */
void srand(unsigned int seed)
{
    next = seed;
}