# 题目描述

n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

# 解法1：DFS + 剪枝


``` js
/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {
    if (n < 1) {
        return [];
    }
    let result = [];
    const cols = new Set();
    const pie = new Set();
    const na = new Set();

    const dfs = (n, row, curState, cols, pie, na) => {
        if (row >= n) {
            result.push(curState);
            return;
        }

        for (let col = 0; col <= n; col++) {
            if(cols.has(col) || pie.has(row + col) || na.has(row - col)) {
                continue;
            } else {
                cols.add(col);
                pie.add(row + col);
                na.add(row - col);

                dfs(n, row + 1, [...curState, col], cols, pie, na);

                cols.delete(col);
                pie.delete(row + col);
                na.delete(row - col);
            }
        }
        
    };
    const generateResult = (n, result) => {
        const board = [];
        for(res in result) {
            for(i in res) {
                let left = '';
                let right = '';
                for(let j = 0; j < i; j++) {
                    left += '.';
                }
                for(let j = 0; j < n - i - 1; j++) {
                    right += '.';
                }
                board.push(left + 'Q' + right);
            }
        }
        
        const lastResult = [];
        for (let i = 0; i <= board.length; i++) {
            const buffer = [];
            for(let j = 0; j < n; j++) {
                buffer.push(board[i + j]);
            }
            lastResult.push(buffer);
        }
        return lastResult;
    };

    dfs(n, 0, [], cols, pie, na);
    return generateResult(n, result);
};
```