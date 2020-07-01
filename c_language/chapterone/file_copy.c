#include <stdio.h>

/* 复制文件1 */
/* main()
{
    int c;
    
    c = getchar();
    while (c != EOF) {
        putchar(c);
        c = getchar();
    }
} */

/* 文件复制2 */
main()
{
    int c;

    while ((c = getchar()) != EOF)
        putchar(c);
}