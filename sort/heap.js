// 堆排序, 定义的是大根堆
function heap_rank(arr) {
    var size = 0;   // 有效区的长度 

    // 创建大根堆
    for (let i = 0; i < arr.length; i++) {
        size = i;
        // add的时间复杂度为O(logn), 即树的高度
        add(arr, size);
    }

    // heapify过程排序. 时间复杂度为O(logn), 即树的高度
    for (let i = size; i > 0; i--) {
        heapify(arr, i);
    }
}

// add过程, 添加新的元素到堆里面去
function add(arr, size) {
    var child = size;
    var parent = parseInt( (child - 1) / 2 ); 

    while (arr[child] > arr[parent]) {
        let temp = arr[child];
        arr[child] = arr[parent];
        arr[parent] = temp;

        child = parent;
        parent = parseInt( (child- 1) / 2 );
    }
}

function heapify(arr, size) {
    // 堆顶元素和最后一个元素互换
    // 并将size--, 相当于排好最大值的位置.
    var temp = arr[0]; 
    arr[0] = arr[size];
    arr[size] = temp;
    size--;

    // 使剩下的部分成为大顶堆
    var parent = 0;
    var max_child = compare(arr, size, parent);
    
    while (arr[parent] < arr[max_child]) {
        let temp = arr[parent];
        arr[parent] = arr[max_child];
        arr[max_child] = temp;

        parent = max_child;
        max_child = compare(arr, size, parent);
    }
}

// 找出左右孩子的最大值的下标, 没有的话返回父亲的下标
function compare(arr, size, parent) {
    if ((parent * 2 + 1) <= size) {
        left = parent * 2 + 1;
    } else {
        left = parent;
    }
    if ((parent * 2 + 2) <= size) {
        right = parent * 2 + 2;
    } else {
        right = parent;
    }
    return arr[left] >= arr[right] ? left : right;
}