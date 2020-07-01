#include <stdio.h>

#define MAXLINE 1000    /* 每行的最大长度 */
#define FIRST 1     /* 连续空格或制表符当中的首个空格或制表符 */
#define NOTFIRST 0 

int get_line(char s[], int maxline);

int main()
{
    int len;    /* 当前行的长度 */
    char line[MAXLINE];    /* 当前行 */

    while((len = get_line(line, MAXLINE)) > 0)
        printf("%s", line);
    return 0;
}

/* 获取行， 并将每行末尾的空格和制表符删去 */
int get_line(char s[], int lim)
{
    int c, i;
    int state;
    int w;  /* 每行中最后一个空格（若是连续出现，则为首个）的位置。 */

    state = FIRST;  /* state还可以用来判断尾部是否有多余的空格或制表符 */
    w = 0;
    for (i = 0; i < lim-1 && (c = getchar()) != EOF && c != '\n'; ++i) {
        if (c != ' ' && c != '\t') {
            s[i] = c;
            state = FIRST;
        }
        else if (state) {
            state = NOTFIRST;
            s[i] = c;
            w = i;
        }
        else
            s[i] = c;
    }

    /* state为FIRST则说明末尾没有多余的空格 */
    if (state == NOTFIRST) {
        if (c == '\n') {
            s[++w] = c;
            ++w;
        }
        s[w] = '\0';
        return w;
    }
    else {
        if (c == '\n') {
            s[i] = c;
            ++i;
        }
        s[i] = '\0';
        return i;
    }
}