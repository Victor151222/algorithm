# 题目描述

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

**示例**:

示例 1：

``` 
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

# 解法1：双指针

``` js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let slowIndex = 0;
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== 0) {
            nums[slowIndex] = nums[fastIndex];
            slowIndex++;
        }
    }
    for (slowIndex; slowIndex < nums.length; slowIndex++) {
        nums[slowIndex] = 0;
    }
};
```
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let slowIndex = 0;
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== 0) {
            nums[slowIndex] = nums[fastIndex];
            if(slowIndex !== fastIndex) {
                nums[fastIndex] = 0;
            }
            slowIndex++;
        }
    }
};
```

