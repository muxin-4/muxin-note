/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var ret = [];
  var exist = {};
  for (var i = 0; i < nums.length; i++) {
    if (typeof (exist[target - nums[i]]) !== 'undefined') {
      ret.push(exist[target - nums[i]] - 1);
      ret.push(i);
    }

    exist[nums[i]] = i + 1;
  }

  return ret
};
twoSum([2, 7, 11, 15], 9);
