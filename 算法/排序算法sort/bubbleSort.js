// 冒泡排序
// 每次两两比较，大的放到后面
// N个数字要排序完成，总共进行N-1趟排序，第i趟的排序次数为(N-i)次
// 如果遇到相等的值不进行交换，那这种排序方式是稳定的排序方式。
// 最好时间复杂度：正序，改进后O(n)，改进前O(n^2)
// 最坏时间复杂度：倒序，O(n^2)
// 平均时间复杂度：O(n^2)
function bubbleSort(arr) {
  // 外层，需要遍历的次数，总共进行N-1趟排序
  for (let i = 1; i < arr.length; i++) {
    // 设定一个标记，若为true，则表示此次循环没有进行交换，也就是待排序列已经有序，排序已经完成。
    let flag = true;
    // 内层，第i趟的排序次数为(N-i)次
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;

        flag = false;
      }
    }

    if (flag) {
      break;
    }
  }
}


let arr = [1, 12, 2, 3, 6, 10];
bubbleSort(arr);
console.log(arr);