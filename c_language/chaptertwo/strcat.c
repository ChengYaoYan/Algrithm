#include <stdio.h>

int main() {
    printf("%d\n", sizeof(int));
    printf("%d\n", sizeof(unsigned int));
    printf("%d\n", sizeof(long));
    printf("%d\n", sizeof(unsigned short));
    printf("%d\n", sizeof(char));
    printf("%d\n", sizeof(unsigned char));
    
}



/* strcat: concatenate t to end of s; s must be big enough */
void strcat(char s[], char t[])
{
    int i, j;

    i = j = 0;
    while (s[i] != '\0')    /* find end of s */
        i++;
    while ((s[i++] = t[j++]) != '\0')  /* copy t */
        ;
}