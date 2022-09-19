// Given a matrix of size n*m that contains only 0s and 1s, where 0 means that the cell is empty and 1 means that there is a wall in that cell, create a function that returns the number of paths that we can take to go from the top left cell to the right bottom cell, knowing that you can move to the right or to the bottom only.

// Example 1:
// Input: matrix = [[0, 0, 0, 0, 1], 
//                  [1, 0, 1, 0, 0], 
//                  [0, 0, 1, 0, 0], 
//                  [0, 0, 0, 0, 0]]
// Output: 4

// By using recursion:
// Time complexity: O(2^(n*m))
// Space complexity: O(n + m)
const paths1 = (matrix, i = 0, j = 0) => {
    let n = matrix.length;
    let m = matrix[0].length;

    if(i > n - 1 || j > m - 1 || matrix[i][j] === 1)
        return 0;
    else if(i === n - 1 && j === m - 1)
        return 1;
    else
        return paths1(matrix, i, j + 1) + paths1(matrix, i + 1, j);
}

// By using dynamic programming:
// Time complexity: O(n*m)
// Space complexity: O(n*m)
const paths2 = (matrix) => {
    let n = matrix.length;
    let m = matrix[0].length;

    let dp = [...Array(n)].map(row => [...Array(m)].map(x => 0));

    dp[0][0] = matrix[0][0] == 1 ? 0 : 1;

    for(let i = 1; i < m; i++){
        dp[0][i] = matrix[0][i] == 1 ? 0 : dp[0][i-1];
    }

    for(let i = 1; i < n; i++){
        dp[i][0] = matrix[i][0] == 1 ?  0 : dp[i-1][0];
    }

    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            dp[i][j] = matrix[i][j] == 1 ?  0 : dp[i-1][j] + dp[i][j-1];
        }
    }

    return dp[n-1][m-1];
}

const paths3 = (matrix, i = 0, j = 0, lookup = {}) => {
    let n = matrix.length;
    let m = matrix[0].length;
    let key = i + ":" + j;

    if(lookup[key])
        return lookup[key];
    if(i > n - 1 || j > m - 1 || matrix[i][j] === 1)
        return 0;
    else if(i === n - 1 && j === m - 1)
        return 1;
    else {
        lookup[key] = paths1(matrix, i, j + 1) + paths1(matrix, i + 1, j);
        return lookup[key];
    }
}

console.log(paths1([[0, 0, 0, 0, 1], [1, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]));
console.log(paths1([[0, 0, 0, 0], [0, 0, 0, 1]]));