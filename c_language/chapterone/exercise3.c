#include <stdio.h>

#define MAXLINE 1000    /* maximum input line length */

int get_line(char s[], int maxline);

/* print line that length is larger than 80 */
int main()
{
    int len;    /* current line length */
    char line[MAXLINE];     /* current line */

    while((len = get_line(line, MAXLINE)) > 0)
        if (len > 80)
            printf("%s", line);
    return 0;

}

/* get_line: read a line into s, return length */
int get_line(char s[], int lim) {
    int i, c;

    for (i = 0; i < lim-1 && (c = getchar()) != EOF && c != '\n'; ++i)
        s[i] = c;
    if (c == '\n') {
        s[i] = c;
        ++i;
    }
    s[i] = '\0';
    return i;
}