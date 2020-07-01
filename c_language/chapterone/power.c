#include <stdio.h>

// int power(int m, int n);

/* test power function */
/* main()
{
    int i;

    for (i = 0; i < 10; ++i)
        printf("%d %d %d\n", i, power(2, i), power(-3, i));
    return 0;

} */

/* power: raise base to n-th power; n >= 0 */
/* int power(int base, int n)
{
    int i, p;

    p = 1;
    for (i = 1; i <= n; i++)
        p = p * base;
    return p;
} */

#define LOWER 0
#define UPPER 300
#define STEP 20

void temperature();

main()
{
    temperature();
    return 0;
}

void temperature()
{
    int fahr;

    for (fahr = LOWER; fahr <= UPPER; fahr = fahr + STEP)
        printf("%3d %6.1f\n", fahr, (5.0/9.0)*(fahr-32));
}