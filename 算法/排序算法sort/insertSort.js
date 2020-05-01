

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


var nums = [3, 2, 1, 5, 4, 6, 3];
console.log("排序前:" + nums);
insertSort(nums);
console.log("排序后:" + nums);