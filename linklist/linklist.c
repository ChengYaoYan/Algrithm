#include <stdio.h>
#include <stdlib.h>

typedef struct linklist {
    int val;
    struct linklist *next;
} linklist;

linklist * create(int n);
int get(linklist *obj, int index);
void addAtHead(linklist *obj, int val);
void addAtTail(linklist *obj, int val);
void addAtIndex(linklist *obj, int index, int val);
void deleteAtIndex(linklist *obj, int index);

int main()
{
    int num, index;
    linklist *head;
    
    printf("input numbers of nodes that you want to create: ");
    scanf("%d", &num);
    head = create(num);

    free(head);
}

/* create: create linklist has n nodes. */
linklist * create(int n)
{
    int i;
    linklist *head = (linklist *)malloc(sizeof(linklist));     /* head pointer */
    linklist *tail;

    head->next = NULL;
    tail = head;
    for (i = 0; i < n; i++) {
        linklist *cur = (linklist *)malloc(sizeof(linklist));   /* current node waits to be inserted */
        printf("input value: ");
        scanf("%d", &cur->val);
        cur->next = NULL;
        tail->next = cur;
        tail = cur;
    }
    return head;
}

/* get: 返回第index节点的值， 如果索引无效， 则返回-1 */
int get(linklist *obj, int index)
{
    int cur_index = 0;
    linklist *p = obj;

    while (p->next) {
        if (cur_index == index) {
            return p->next->val;
        }
        else {
            cur_index++;
            p = p->next;
        }
    }
    return -1;
}

/* addAtHead: 在头节点之后插入一个新的节点 */
void addAtHead(linklist *obj, int val)
{
    linklist *head;

    head = obj;
    linklist *cur = (linklist *)malloc(sizeof(linklist));
    cur->val = val;

    cur->next = head->next;
    head->next = cur;
}

/* addAtTail: 在尾节点后面添加一个新的节点 */
void addAtTail(linklist *obj, int val)
{
    linklist *p= obj;

    linklist *cur = (linklist *)malloc(sizeof(linklist));
    cur->val = val;
    cur->next = NULL;

    while(p->next)
        p = p->next;
    p->next = cur;
}

/* addAtIndex: 在index处插入新的节点 */
void addAtIndex(linklist *obj, int index, int val)
{
    int i;
    linklist *p = obj;
    linklist *cur = (linklist *)malloc(sizeof(linklist));

    i = 0;
    cur->val = val;
    if (index < 0) {
        cur->next = p->next;
        p->next = cur;
        return;
    }
    while (p->next) {
        if (index == i) {
            cur->next = p->next;
            p->next = cur;
            return;
        }
        else {
            i++;
            p = p->next;
        }
    }
}

void deleteAtIndex(linklist *obj, int index)
{
    int i;
    linklist *p = obj;

    i = 0;
    if (index < 0)
        return;
    while (p->next) {
        if (index == i) {
            p->next = p->next->next;
            return ;
        }
        else {
            i++;
            p = p->next;
        }
    }
}