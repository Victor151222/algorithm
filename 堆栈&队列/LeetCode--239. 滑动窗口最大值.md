# 题目描述

给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

**示例**:

``` c
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 
输出: [3,3,5,5,6,7] 
解释: 
滑动窗口的位置          最大值 
---------------        ----- 
[1 3 -1] -3 5 3 6 7      3 
1 [3 -1 -3] 5 3 6 7      3 
1 3 [-1 -3 5] 3 6 7      5 
1 3 -1 [-3 5 3] 6 7      5 
1 3 -1 -3 [5 3 6] 7      6 
1 3 -1 -3 5 [3 6 7]      7
```

# 解1：双端队列

时间复杂度为：O(n)

**算法思路**
根据窗口是固定宽度，且平行右移这两个特点。只要你比我 `老` 且比我 `小` ，就抛弃你。这样的话，窗口里面的第一个元素永远是窗口里面最大的。

``` js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
    if (nums.length === 0 || k === 0) return [];
    let window = []; // 装位置
    let result = [];
    nums.forEach((item, index) => {
        index >= k && window[0] <= index - k && window.shift();
        while (window.length > 0 && nums[window.slice(-1)] <= item) {
            window.pop();
        }
        window.push(index);
        index >= k - 1 && result.push(nums[window[0]]);
    })
    return result;
};
```

# 解2：优先级队列

时间复杂度：nlogk

**优先级队列**
每次移动窗口求最大值，以及在动态数据中求最大值，我们想到的就是优先级队列，而优先级队列的实现是堆这种数据结构，这道题用堆解决效率更高。

**算法思路**
需要维护大小为 k 的大顶堆，堆顶就是当前窗口最大的数据，当移动窗口时，如果插入的数据大于堆顶的数据，将其加入到结果集中。同时要删除数据，如果删除的数据为最大数据且插入的数据小于删除的数据时，向大小为 k 的以 logn 的时间复杂度插入，返回堆顶元素。

> https://blog.csdn.net/qq_36903042/article/details/89360342

``` js
let count = 0;
let heap = [];
let n = 0;
var maxSlidingWindow = function(nums, k) {
    let pos = k;
    n = k;
    let result = [];
    let len = nums.length;

    // 判断数组和最大窗口树是否为空
    if (nums.length === 0 || k === 0) return result;

    // 建大顶堆
    let j = 0
    for (; j < k; j++) {
        insert(nums[j]);
    }
    result.push(heap[1]);

    // 移动窗口
    while (len - pos > 0) {
        if (nums[k] > heap[1]) {
            result.push(nums[k]);
            insert(nums[k]);
            nums.shift();
            pos++;
        } else {
            if (nums.shift() === heap[1]) {
                removeMax();
            }
            insert(nums[k - 1]);
            result.push(heap[1]);
            pos++;
        }
    }
    return result;
};

// 插入数据
const insert = (data) => {
    //判断堆满
    // if(count >= n) return; // >=

    // 插入到数组尾部
    count++
    heap[count] = data;

    //自下而上堆化
    let i = count;
    while (i / 2 > 0 && heap[i] > heap[parseInt(i / 2)]) {
        swap(heap, i, parseInt(i / 2));
        i = parseInt(i / 2);
    }
}

// 两个数组内元素交换
swap = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

// 堆的删除
const removeMax = () => {
    // 判断堆空
    if (count <= 0) return;

    // 最大数据移到最后删除
    heap[1] = heap[count];

    // 长度减一
    count--;
    // 删除数据
    heap.pop();

    // 从上到下堆化
    heapify(heap, count, 1);
}

// 从上到下堆化
const heapify = (heap, count, i) => {
    while (true) {
        // 存储堆子节点的最大值下标
        let maxPos = i;

        // 左子节点比父节点大
        if (i * 2 < n && heap[i * 2] > heap[i]) maxPos = i * 2;
        // 右子节点比父节点大
        if (i * 2 + 1 <= n && heap[i * 2 + 1] > heap[maxPos]) maxPos = i * 2 + 1;

        // 如果没有发生替换，则说明该堆只有一个结点（父节点）或子节点都小于父节点
        if (maxPos === i) break;

        // 交换
        swap(heap, maxPos, i);
        // 继续堆化
        i = maxPos;
    }
}
```

# 解3：暴力破解

时间复杂度：n^2

这样的解决效率非常低，如果数据非常大时，共有 n1 个数据，窗口大小为 n2（n1 远远大于 n2），时间复杂度为 n2(n1 - n2) 。也就是 n1 * n2，最坏时间复杂度为 n^2。

**算法思路**
用两个指针，分别指向窗口的起始位置和终止位置，然后遍历窗口中的数据，求出最大值；向前移动两个指针，然后操作，直到遍历数据完成位置。

``` js
var maxSlidingWindow = function(nums, k) {
    if (k > nums.length || k === 0) return [];
    let res = [],
        maxIndex = -1;
    for (let l = 0, r = k - 1; r < nums.length; l++, r++) {
        if (maxIndex < l) {
            // 遍历求出最大值
            let index = l;
            for (let i = l; i <= r; i++) {
                if (nums[i] > nums[index]) index = i;
            }
            maxIndex = index;
        }
        if (nums[r] > nums[maxIndex]) {
            maxIndex = r;
        }
        res.push(nums[maxIndex]);
    }
    return res;
};
```

