# 排序算法sort
## 概述
见图 十大排序概括.png

### 关于时间复杂度
- 平方阶 (O(n2)) 排序 各类简单排序：直接插入、直接选择和冒泡排序。
- 线性对数阶 (O(nlog2n)) 排序 快速排序、堆排序和归并排序；
- O(n1+§)) 排序，§ 是介于 0 和 1 之间的常数。 希尔排序
- 线性阶 (O(n)) 排序 基数排序，此外还有桶、箱排序。

### 关于空间复杂度

### 关于排序方式
- 内部排序: 在内存中就能完成的排序。
- 外部排序: 因待排序的数据很大，以至于内存一次不能容纳全部记录，需要在内存和外部存储器之间进行多次数据交换的排序，比较常用的有归并排序。

### 关于稳定性
假定在待排序的记录序列中，存在多个具有相同关键字的记录，若经过排序，这些记录的相对次序保持不变，即在原序列中，ri=rj，且ri在rj之前，而在排序后的序列中，ri仍在rj之前，则称这种排序算法是稳定的;否则称为不稳定的。      
- 稳定: 冒泡排序、插入排序、归并排序、计数排序、桶排序和基数排序。
- 不稳定: 选择排序、快速排序、希尔排序、堆排序。

## 冒泡排序bubbleSort.js
```
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
```

## 选择排序selectionSort.js
```
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
```

## 插入排序insertSort.js
```
// 插入排序
// 选择未排序部分的第一个元素作为待插入元素，保存一个副本，依次向前遍历，
// 判断前面的元素是否比副本大，如果比副本大就把前面的元素赋值到现在的位置，
// 直到前面的元素不再比副本大，就将副本的值赋值到现在的位置即插入到前面元素的后一位。
function insertSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var j = i;
    var t = arr[i];
    while (j > 0 && t < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = t;
  }
}
```

## 归并排序mergeSort.js
```
//归并排序，将大数组分为不可分的小数组即一个数之后进行排序
function mergeSort(nums) {
  sort(nums, 0, nums.length - 1);
}
function sort(nums, p, r) {
  // 如果数组可分，则分成两个数组再合并
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    sort(nums, p, q);
    sort(nums, q + 1, r);
    merge(nums, p, q, r);
  }
}
function merge(nums, p, q, r) {
  // 保存两个数组的副本
  let L = nums.slice(p, q + 1);
  let R = nums.slice(q + 1, r + 1);
  // 无穷大作为哨兵，合并时不必考虑下标越界
  L.push(Infinity);
  R.push(Infinity);
  // 两个数组的下标
  let il = 0;
  let ir = 0;
  // 从小到大合并两个数组
  for (let i = p; i <= r; i++) {
    if (L[il] < R[ir]) {
      nums[i] = L[il];
      il++;
    } else {
      nums[i] = R[ir];
      ir++;
    }
  }
}
```
## 快速排序quickSort.js

## 希尔排序shellSort.js

## 堆排序heapSort.js

## 计数排序countingSort.js

## 桶排序bucketSort.js

## 基数排序radixSort.js


