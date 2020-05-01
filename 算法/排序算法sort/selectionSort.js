// 选择排序
// 进行n-1轮选择，每一轮从数组的未排序部分找到最小的元素的索引，将最小的元素和未排序部分的第一个元素交换，如果第一个元素就是最小的元素的话，那就不交换。
function selectionSort(arr) {
  // 选择n-1轮
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // 在未排序部分arr[i + 1...N] 中找最小值索引，i+1 代表有序部分的第二个元素，我们默认第一个元素是最小的
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 如果本次选择中最小元素不是第一个数，就交换第一个数和最小元素
    if (minIndex != i) {
      let temp = arr[minIndex]
      arr[minIndex] = arr[i]
      arr[i] = temp;
    }
  }
}

let arr = [1,5,3,8,5,6,7];
selectionSort(arr);
console.log(arr);