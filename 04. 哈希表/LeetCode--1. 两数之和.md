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

根据题意又可进一步推出优化方法：倒推法。

下面为思考的过程：

1. 穷举法的效率一般都比较差，所以需要尝试一些新姿势。我们再来分析一下上面的穷举算法，要从一个集合中找出两个数，使得它们的和与给出的数`target`相等，使用穷举算法时，当我们选出第一个数`a`后，需要循环遍历之后的数，然后一一进行加和判断，但实际上，我们只需要知道剩下的数里，有没有数等于`target - a`即可，而每次从数组中找到某个数是否存在，都需要遍历一次，因此，更好的做法是将数与对应的序号存到一个`map`中，这样就能将查找效率从`O(n)`提高到`O(1)`。


2. 我们对nums数组进行了两次遍历，第一次遍历是将所有元素都存入map中，第二次遍历是查找目标的整数对是否存在。

3. 进一步优化，将两次遍历变为一次遍历。在这个题中，要寻找的整数是成对存在的，所以我们可以只进行一次遍历。

4. 如果`target`减去当前遍历数值后的数不存在于`map`中，则将当前数值与序号的映射关系存入`map`中。也许你会问，那找到第一个要寻找的数时，第二个数显然还不在`map`中，那怎么办呢？别着急，前面已经说过了，因为要寻找的数是成对存在的，这里我们假设为`a`和`b`，所以遇到第一个数`a`时，由于b还没有存入`map`，所以先将`a`存入`map`中，我们在找到第二个数`b`后，此时`a`已经在`map`中了，所以就能在一次遍历中顺利找到了这对我们想要的整数了。


> https://cloud.tencent.com/developer/article/1432338


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
    const visited = new Map();
    for(let i=0; i<nums.length; i++) {
        otherNumber = target - nums[i];
        if(visited.has(otherNumber)) {
            return [visited.get(otherNumber), i];
        }
        visited.set(nums[i], i);
    }
};
```

