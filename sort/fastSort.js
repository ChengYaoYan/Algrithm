var arr = [];

function produceArr(arr) {
    for (let i = 0; i < 10000; i++) {
        let r = Math.floor(Math.random() * 10000);
        arr.push(r);
    }
}

produceArr(arr);
var t = arr;




// fastSort: 快排
//   arr: 待排序数组
//   L: 数组的左边界
//   R: 数组的右边界
function fastSort(arr, L, R) {
    if ((R - L) < 1)
        return; 

    var cur = L,
        min = L - 1,    // 最小区右边界
        max = R,        // 最大区左边界
        randomIndex = Math.floor(Math.random() * (R - L) + L);

    [arr[randomIndex], arr[R]] = [arr[R], arr[randomIndex]];
    while (min < max - 1) {
        if (arr[cur] < arr[R]) {
            min++;
            cur++;
        }
        else if (arr[cur] === arr[R]) {
            cur++;
        }
        else {
            --max;
            [arr[cur], arr[max]] = [arr[max], arr[cur]];
        }
    }

    fastSort(arr, L, min);
    fastSort(arr, max, R);
}

fastSort(arr, 0, arr.length - 1);
console.log(t);
console.log(arr);