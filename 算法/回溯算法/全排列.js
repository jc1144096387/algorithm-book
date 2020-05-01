/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  // 回溯法
  let res = [];
  let track = [];//路径
  function rec(track, nums, res){
    if(track.length == nums.length){
      res.push([...track]);
      // console.log(res,track,nums)
      return;
    }

    for(let i = 0; i < nums.length; i ++){
      // 如果数字已在路径中，则不可选择，跳过
      if(track.indexOf(nums[i]) != -1){
        continue;
      }
      // 进行选择：将数字加入路径
      track.push(nums[i]);
      // console.log(track);
      // 进入下一轮选择
      rec(track, nums, res);
      // 撤销选择：将数字从路径中删除
      track.pop();
      // console.log(track);
    }
  }
  rec(track,nums, res);
  return res;
};

console.log(permute([1,2,3]));