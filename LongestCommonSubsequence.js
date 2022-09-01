// Given two strings str1 and str2, create a function that returns the length of their longest common subsequence, in other words, the subsequence that is present in both of them.

// Example 1:
// Input: str1 = "abdacbab", str2 = "acebfca"
// Output: 4
// Explanation: the length of the longest common subsequence of str1 and str2 is 4, this one for example: "abca"

// Example 2:
// Input: str1 = "cbebaff", str2 = "aeddbggf"
// Output: 3
// Explanation: the length of the longest common subsequence of str1 and str2 is 3, this one for example: "ebf"

// Example 3:
// Input: str1 = "abebafba", str2 = "cddghcd"
// Output: 0
// Explanation: the only common subsequence is "", the empty string, its length is 0


// Brute force solution:
// Time complexity: O((n+m).2^n)
// Space complexity: O(n.2^n)
const isSubsequence = (str1, str2) => {
    let ptr1 = ptr2 = 0;
    while(ptr1 < str1.length && ptr2 < str2.length) {
        if(str1.charAt(ptr1) == str2.charAt(ptr2)) {
            ptr1++;
            ptr2++;
        } else {
            ptr1++;
        }
    }
    return ptr2 == str2.length;
}

const getSubsequences = (str) => {
    let subsequences = [];
    const rec = (str, i, subsequence) => {
        if(i == str.length){
            subsequences.push(subsequence);
        } else {
            rec(str, i+1, subsequence+str[i]);
            rec(str, i+1, subsequence);
        }
    }
    rec(str, 0, "");
    return subsequences;
}

const lcs1 = (str1, str2) => {
    let maxLength = 0;
    let subsequences = getSubsequences(str1);
    for(let subsequence of subsequences){
        if(isSubsequence(str2, subsequence) && subsequence.length > maxLength)
            maxLength = subsequence.length;
    }
    return maxLength;
}

// Recursive solution:
// Time complexity: O(2^(n+m))
// Space complexity: O(n + m)
const lcs2 = (str1, str2, i = 0, j = 0) => {
    if(i == str1.length || j == str2.length)
        return 0;
    else if(str1[i] == str2[j])
        return 1 + lcs2(str1, str2, i+1, j+1);
    else
        return Math.max(lcs2(str1, str2, i+1, j), lcs2(str1, str2, i, j+1));
}

// Time-optimized recursive solution (memoization):
// Time complexity: O(nm)
// Space complexity: O(nm)
const lcs3 = (str1, str2, i = 0, j = 0, memoiz = {}) => {
    let key = i + " " + j;
    if(memoiz[key] !== undefined)
        return memoiz[key];
    else if(i == str1.length || j == str2.length)
        return 0;
    else if(str1[i] == str2[j])
        return 1 + lcs3(str1, str2, i+1, j+1, memoiz);
    else {
        let output = Math.max(lcs3(str1, str2, i+1, j, memoiz), lcs3(str1, str2, i, j+1, memoiz));
        memoiz[key] = output;
        return output;
    }
}

// Dynamic programming solution:
// Time complexity: O(nm)
// Space complexity: O(nm)
const lcs4 = (str1, str2) => {
    let n = str1.length;
    let m = str2.length;
    let dp = [...Array(n+1)].map(row => [...Array(m+1)].map(x => 0));
    for(let i = 1; i < n+1; i++) {
        for(let j = 1; j < m+1; j++){
            if(str1[i-1] == str2[j-1])
                dp[i][j] = 1 + dp[i-1][j-1];
            else
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[n][m];
}

// Space-optimized dynamic programming solution:
// Time complexity: O(nm)
// Space complexity: O(m)
const lcs5 = (str1, str2) => {
    let n = str1.length;
    let m = str2.length;
    let dp = [...Array(m+1)].map(x => 0)
    let tempDp = [...Array(m+1)].map(x => 0)
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < m+1; j++){
            if(str1[i-1] == str2[j-1])
            tempDp[j] = 1 + dp[j-1];
            else
            tempDp[j] = Math.max(tempDp[j-1], dp[j]);
        }
        for(let j = 1; j < m+1; j++){
            dp[j] = tempDp[j];
            tempDp[j] = 0;
        }
    }
    return dp[m];
}

console.log(lcs4("abdacbab", "acebfca"))