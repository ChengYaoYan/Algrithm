// process的功能是使arr有序
function process (arr, start, end, reg) {
  if (start >= end) {
    return
  }

  const len = end - start + 1
  const mid = (len >> 1) + start
  let start1 = start
  const end1 = mid - 1
  let start2 = mid
  const end2 = end
  process(arr, start1, end1, reg)
  process(arr, start2, end2, reg)
  let k = start
  while (start1 <= end1 && start2 <= end2) {
    reg[k++] = arr[start1] < arr[start2] ? arr[start1++] : arr[start2++]
  }
  while (start1 <= end1) {
    reg[k++] = arr[start1++]
  }
  while (start2 <= end2) {
    reg[k++] = arr[start2++]
  }
  for (let i = start; i <= end; i++) {
    arr[i] = reg[i]
  }
}

function mergeSort (arr) {
  const reg = new Array(arr.length)
  process(arr, 0, arr.length - 1, reg)
}
