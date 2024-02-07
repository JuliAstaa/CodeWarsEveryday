/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.
*/

//if the length of the array odd u can use this
// const stray = (nums) => nums.reduce((a, b) => a ^ b);
// console.log(stray([17, 17, 3, 17, 17, 17, 17]));

const stray = (nums) => {
  for (let i in nums) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i];
  }
};

console.log(stray([17, 17, 17, 4, 17, 17, 17, 17]));
