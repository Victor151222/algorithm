# 题目描述

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

# 解法1：暴力

时间复杂度：O(n^2)

``` js
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    if (nums.length === 1) {
        return nums[0];
    }
    const majorityCount = nums.length / 2;
    for (let i = 0; i < nums.length - 1; i++) {
        let count = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                count += 1;
            }
        }
        if (count > majorityCount) {
            return nums[i];
        }
    }
};
```

# 解法2：哈希表

时间复杂度：O(n)

``` js
const majorityElement = (nums) => {
    if (nums.length === 1) {
        return nums[0];
    }
    let map = {};
    let result = null;
    for(let i = 0; i < nums.length; i++){
        if(map.hasOwnProperty(nums[i])){
            map[nums[i]]++;
            if(map[nums[i]] > nums.length / 2){
                result = nums[i];
            }
        }else{
            map[nums[i]] = 1;
        }
    }
    return result;
};
```

# 解法3： 排序

时间复杂度：O(nlogn)

```js
const majorityElement = (nums) => {
    nums.sort();
    return nums[parseInt(nums.length / 2)];
}
```

# 解法4： 投票

时间复杂度：O(n)

```js
const majorityElement = (nums) => {
    let count = 0;
    let candidate = null;

    nums.forEach((num) => {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    });

    return candidate;
}
```