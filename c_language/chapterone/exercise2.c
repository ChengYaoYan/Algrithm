#include <stdio.h>

#define IN 1    /* inside a word */
#define OUT 0   /* outside a word */

/* 一个单词一行打印 */
main()
{
    int c, state;

    state = OUT;

    while ((c = getchar()) != EOF) {
        if (c == ' ' || c == '\t' || c == '\n')
            state = OUT;
        else if (state == OUT) {
            putchar('\n');
            putchar(c);
            state = IN;
        }
        else
            putchar(c);
    }
}