// Given a string str, create a function that returns all its possible subsequences, the order doesn't matter.

// Example 1:
// Input: str = "abcd"
// Output: ["abcd", "abc", "abd", "ab", "acd", "ac", "ad", "a", "bcd", "bc", "bd", "b", "cd", "c", "d", ""]

const getSubsequences = (str) => {
    let subsequences = [];
    const rec = (str, i, subsequence) => {
        if(i === str.length) {
            subsequences.push(subsequence);
        } else {
            rec(str, i+1, subsequence + str[i]);
            rec(str, i+1, subsequence);
        }
    }
    rec(str, 0, "");
    return subsequences;
}

console.log(getSubsequences("abcd"))