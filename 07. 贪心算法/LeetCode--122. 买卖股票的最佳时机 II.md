# 题目描述

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

# 解法1：贪心

只要第二天比第一天高就买进

时间复杂度：O(n)

``` js
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let profit = 0;
    for (let i=0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            profit += prices[i + 1] - prices[i];
        }
    }
    return profit;
};
```