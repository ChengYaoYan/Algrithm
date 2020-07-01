#include <stdio.h>

int htoi(char s[]);

int main()
{
    char s[10] = "0x112ffaA";
    long res;

    res = htoi(s);
    printf("%ld\n", res);
    return 0;

}

/* htoi: 将十六进制数转换成字符串 */
int htoi(char s[])
{
    int i;
    long res;

    i = 2;
    res = 0;
    if (s[0] != '0' || (s[1] != 'x' && s[1] != 'X'))
        return 0; 
    while (s[i] != '\0') {
        if (s[i] >= '0' && s[i] <= '9')
            res = res*16 + (s[i++] - '0');
        else if (s[i] >= 'a' && s[i] <= 'f')
            res = res*16 + (s[i++] - 'a' + 10);
        else if (s[i] >= 'A' && s[i] <= 'F')
            res = res*16 + (s[i++] - 'A' + 10);
        else
            return 0;
    }
    return res;
}