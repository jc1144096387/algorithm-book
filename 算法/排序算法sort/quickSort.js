//快速排序，分一次数组，排序一次，分为两类，一直分一直排序，直到排序完只有2个元素的数组
//分治法
// 该方法的基本思想是：

// 1．先从数列中取出一个数作为基准数。

// 2．分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。

// 3．再对左右区间重复第二步，直到各区间只有一个数。
// function quickSort(){
//     quick(arr,0,arr.length-1);
// }

// function quick(arr,left,right){
//     if(arr.length > 1){
//         var index = partition(arr,left,right);
//         if(left<index-1){
//             quick(arr,left,index-1);
//         }
//         if(right>index){
//             quick(arr,index,right);
//         }
//     }
// }
// function partition(arr,left,right){
//     var pivot = arr[Math.floor((left+right)/2)];//取值为标准，不能取下标，取下标的话交换位置后值会变
//     var i = left;
//     var j = right;
//     while(i<=j){
//         while(arr[i]<pivot){
//             i ++;
//         }
//         while(arr[j]>pivot){
//             j --;
//         }
//         if(i <= j){
//             var t = arr[i];
//             arr[i] = arr[j];
//             arr[j] = t;
//             i ++;
//             j --;
//         }
//     }
//     return i;
// }

function quickSort(arr,left,right){
    if(left < right){
        var pivot = arr[Math.floor((left+right)/2)];
        var i = left;
        var j = right;
        while(i <= j){
            while(arr[i]<pivot){
                i ++;
            }
            while(arr[j]>pivot){
                j --;
            }
            if(i <= j){
                var t = arr[i];
                arr [i] = arr[j];
                arr[j] = t;
                i ++;
                j --;
            }
        }
        quickSort(arr,left,i-1);
        quickSort(arr,i,right);
    }
}





//快排
    /**
     * 将数组arr分为两部分，前一部分整体小于后一部分
     */
    function partition(arr, left, right) {
        // 交换数组最左元素与数组的中间元素
        let midIndex = ((left + right) / 2) >> 0;
        swap(arr, left, midIndex)
        // 基准元素
        const flagItem = arr[left];
        let i = left + 1,
          j = right;
        while (true) {
          while (i <= right && arr[i] < flagItem) {
            i++;
          }
          while (j >= left && arr[j] > flagItem) {
            j--;
          }
          if (i > j) {
            break;
          } else {
            swap(arr, i, j);
            i++;
            j--;
          }
        }
        swap(arr, left, j);
        return j;
      }
  
      function quickSort(arr, left = 0, right = arr.length - 1) {
        if (left >= right) {
          return;
        }
        const mid = partition(arr, left, right);
        quickSort(arr, left, mid - 1);
        quickSort(arr, mid + 1, right);
      }
  