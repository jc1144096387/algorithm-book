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
let nums = [1, 2, 5, 3, 10, 6, 3, 8];
mergeSort(nums);
console.log(nums);





