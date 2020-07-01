#include <stdio.h>

/* 统计空格，制表符与换行符个数 */
/* main()
{
    int c, ns, nt, nn;

    ns = 0;
    nt = 0;
    nn = 0;
    while ((c = getchar()) != EOF) {
        if (c == ' ')
            ++ns;
        if (c == '\t')
            ++nt;
        if (c == '\n')
            ++nn;
    }

    printf("%d %d %d\n", ns, nt, nn);
} */

/* 复制输入到输出， 连续的空格用一个空格代替 */
/* inspace标记当前字符是否处于连续空格当中 */
/* main()
{
    int c;
    int inspace;    

    inspace = 0;

    while ((c = getchar()) != '\n') {
        if (c == ' ') {
            if (inspace == 1)
                ;
            else {
                putchar(c);
                inspace = 1;
            }
        } else {
            putchar(c);
            inspace = 0;
        }
    }
} */

/* 复制输入到输出， 并将制表符替换为\t, 反斜杠替换为\\ */
main()
{
    int c;

    while ((c = getchar()) != EOF) {
        if (c == '\t')
            printf("\\t");
        else if (c == '\\')
            printf("\\\\");
        else
            putchar(c);
    }
}