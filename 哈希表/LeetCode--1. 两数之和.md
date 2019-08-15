# 题目描述

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

**示例**:

``` c
给定 nums = [2, 7, 11, 15], target = 9 
因为 nums[0] + nums[1] = 2 + 7 = 9 
所以返回 [0, 1]
```

# 解法1：暴力破解

时间复杂度：O(n^2)

``` js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (!(nums instanceof Array)) {
        return 'ok'
    }
    var len = nums.length
    if (len < 2) {
        return 'ok'
    }
    for (var i = 0; i < len - 1; i++) {
        for (var j = 1; j < len; j++) {
            if (i === j) {
                continue
            }
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
};
```

# 解法2：哈希表

时间复杂度：O(n)

``` js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arrobj = {}
    for (var i = 0; i < nums.length; i++) {
        var comp = target - nums[i]
        if (arrobj[comp] !== undefined) {
            return [arrobj[comp], i]
        }
        arrobj[nums[i]] = i
    }
    return []
};
```

**ES6的Map**

``` js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const arrobj = new Map();
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (arrobj.get(comp) !== undefined) {
            return [arrobj.get(comp), i];
        }
        arrobj.set(nums[i], i);
    }
    return [];
};
```

