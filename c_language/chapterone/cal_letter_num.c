#include <stdio.h>

/* 统计字符的数量1 */
/* main()
{
    long nc;

    nc = 0;
    while (getchar() != EOF)
        ++nc;
    printf("%ld\n", nc);
} */

/* 统计字符的数量2 */
main()
{
    double nc;

    for (nc = 0; getchar() != EOF; ++nc)
        ;
    printf("%.0f\n", nc);   /* .0f 强制不打印小数点后面的小数部分 */
}