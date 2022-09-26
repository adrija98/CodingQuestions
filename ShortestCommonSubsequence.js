// Given two strings s1 and s2, find the length of their shortest common supersequence, the shortest string that has both s1 and s2 subsequences.

// A string A is a supersequence of a string B if B is a subsequence of A.

// Example:
// input:
// s1 = "abdacebfcab"
// s2 = "acebfca"
// output: 11
// explanation: The shortest common supersequence of s1 and s2 is "abdacebfcab", its length is 11

// Dynamic programming - Memoization
// Time complexity = O(nm). It is zO(2 ^ (n + m)) in case of recursive solution
// Space complexity = O(nm)
const scs1 = (s1, s2, i = 0, j = 0, lookup = {}) => {
    let key = i + ":" + j;
    if(lookup[key])
        return lookup[key];
    if(i === s1.length)
        return s2.length - j;
    else if(j === s2.length)
        return s1.length - i;
    else if(s1[i] ===  s2[j]) {
        lookup[key] = 1 + scs1(s1, s2, i + 1, j + 1, lookup);
        return lookup[key];
    } else {
        lookup[key] = 1 + Math.min(scs1(s1, s2, i + 1, j, lookup), scs1(s1, s2, j, j + 1, lookup));
        return lookup[key];
    }
}

// Dynamic programming - Tabulation
// Time complexity = O(nm)
// Space complexity = O(nm)
const scs2 = (s1, s2) => {
    let n = s1.length;
    let m = s2.length;
    let dp = [...Array(n+1)].map(row => [...Array(m+1)].map(x => 0));
    for(let i = 1; i < n + 1; i++)
        dp[i][0] = i;
    for(let j = 1; j < m + 1; j++)
        dp[0][j] = j;
    for(let i = 1; i < n+1; i++) {
        for(let j = 1; j < m+1; j++){
            if(s1[i-1] === s2[j-1])
                dp[i][j] = 1 + dp[i-1][j-1];
            else
                dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1]); 
        }
    }
    return dp[n][m];
}

console.log(scs2("abdacebfcab", "acebfca"));