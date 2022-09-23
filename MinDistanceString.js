// Given two words as strings word1 and word2, create a function that returns the minimum number of operations required to convert word1 to word2. Note that we have 3 possible operations, we can either insert a character, or remove a character, or replace a character.

// Example 1:
// Input: str1 = "inside", str2 = "index"
// Output: 3
// Explanation: to convert "inside" to "index", we need 3 operations, we remove the 's', we remove the 'i', and we insert 'x' (inside -> inide -> inde -> index)

// Example 2:
// Input: str1 = "eagles", str2 = "algiers"
// Output: 4
// Explanation: to convert "eagles" to "algiers", we need 4 operations, we remove the 'e', we insert 'l', we replace the second 'l' by 'i', and we insert 'r' (eagles -> agles -> algles -> algies -> algiers)

// By using recursion:
// Time complexity: O(3^(n+m))
// Space complexity: O(n + m)
const minDistance1 = (word1, word2, i =0, j = 0) => {
    if(i == word1.length)
        return word2.length-j;
    else if(j == word2.length)
        return word1.length-i;
    else if(word1[i] == word2[j])
        return minDistance1(word1, word2, i+1, j+1);
    else
        return 1 + Math.min(minDistance1(word1, word2, i+1, j), minDistance1(word1, word2, i, j+1), minDistance1(word1, word2, i+1, j+1));
}

// By using dynamic programming: Tabulation
// Time complexity: O(nm)
// Space complexity: O(nm)
const minDistance2 = (word1, word2) => {
    let n = word1.length;
    let m = word2.length;

    let dp = [...Array(n+1)].map(row => [...Array(m+1)].map(x => 0));
    for(let i = 0; i < m+1; i++) 
        dp[0][i] = i;
    for(let i = 0; i < n+1; i++) 
        dp[i][0] = i;

    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < m+1; j++){
            if(word1[i-1] == word2[j-1])
                dp[i][j] = dp[i-1][j-1];
            else
                dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
        }
    }

    return dp[n][m];
}

// By using dynamic programming: Memoization
// Time complexity: O(nm)
// Space complexity: O(nm)
const minDistance3 = (word1, word2, lookup ={}) => {
    let key = i + ":" + j;
    if(lookup[key])
        return lookup[key];
    if(i == word1.length)
        return word2.length-j;
    else if(j == word2.length)
        return word1.length-i;
    else if(word1[i] == word2[j]) {
        lookup[key] = minDistance1(word1, word2, i+1, j+1);
        return lookup[key];
    } else {
        lookup[key] = 1 + Math.min(minDistance1(word1, word2, i+1, j), minDistance1(word1, word2, i, j+1), minDistance1(word1, word2, i+1, j+1));
        return lookup[key];
    }
}

console.log(minDistance1("inside", "index"));