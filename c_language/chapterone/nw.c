#include <stdio.h>

#define IN 1    /* inside a word */
#define OUT 0   /* outside a word */

/* 统计行数， 单词数， 字符数 */
main()
{
    int c, nl, nw, nc, state;

    state = OUT;
    nl = nw = nc = 0;

    while ((c = getchar()) != EOF) {
        ++nc;

        if (c == '\n')
            ++nl;
        if (c == ' ' || c == '\t' || c == '\n') {
            state = OUT;
        }
        else if (state == OUT) {
            state = IN;
            ++nw;
        }
    }
    printf("%d %d %d", nl, nw, nc);
}