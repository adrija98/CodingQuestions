// Given a mine of n rows and m columns where mine[i][j] represents the amount of gold that is present there, we want to enter from the top of the mine and take as much gold as possible when exiting from the bottom, knowing that we can only move to the bottom, to the bottom-left, or to the bottom-right. We can exit from anywhere from the last row.


// Example:

// input:
// mine = [
//    [3, 2, 12, 15, 10],
//    [6, 19, 7, 11, 17],
//    [8, 5, 12, 32, 21],
//    [3, 20, 2, 9, 7]
// ]

// output: 73

// explanation: 15+17+32+9 = 73


// Dynamic programming: Memoization
// Time complexity = O(3^n) for Recursivec, O(nm) for DP
// Space complexity = O(nm)
const rec = (mine, i = 0, j = 0, lookup) => {
    let n = mine.length;
    let m = mine[0].length;
    let key = i + ":" + j;
    if(lookup[key])
        return lookup[key];
    else if(i === n || j === m || j < 0)
        return 0;
    else {
        lookup[key] = mine[i][j] + Math.max(rec(mine, i + 1, j - 1, lookup), rec(mine, i + 1, j, lookup), rec(mine, i + 1, j + 1, lookup));
        return lookup[key];
    }

}

const gold = (mine) => {
    let max_gold = 0;
    let lookup = {};
    for(let i = 0; i < mine[0].length; i++) {
        max_gold = Math.max(max_gold, rec(mine, 0, i, lookup));
    }
    return max_gold;
}

// Dynamic programming: Tabulation
// Time complexity = O(3^n) for Recursivec, O(nm) for DP
// Space complexity = O(nm)
const gold2 = (mine) => {
    let n = mine.length;
    let m = mine[0].length;

    let dp = [...Array(n)].map(row => [...Array(m)].map(x => 0));
    
    for(let i = 0; i < mine[0].length; i++)
        dp[0][i] = mine[0][i];
    
    for(let i = 1; i < mine.length; i++) {
        for(let j = 0; j < mine[0].length; j++) {
            let top_left = (j - 1) >= 0 ? dp[i - 1][j - 1] : 0
            let top = dp[i - 1][j];
            let top_right = (j + 1) < m ? dp[i - 1][j + 1] : 0;
            dp[i][j] = mine[i][j] + Math.max(top_left, top, top_right);
        }
    }

    let max_gold = 0;
    for(let i = 0; i < mine[0].length; i++) {
        max_gold = Math.max(max_gold, dp[n - 1][i]);
    }

    return max_gold;
}

console.log(gold2([[3, 2, 12, 15, 10],[6, 19, 7, 11, 17],[8, 5, 12, 32, 21],[3, 20, 2, 9, 7]]));