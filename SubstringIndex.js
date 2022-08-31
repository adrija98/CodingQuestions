// Given two strings str1 and str2, create a function that returns the first index where we can find str2 in str1. If we cannot find str2 in str1, the function must return -1.
// Try to solve the problem without using the built-in .indexOf() method.

// Example 1:
// Input: str1 = "inside", str2 = "side"
// Output: 2
// Explanation: we can find "side" in "inside" by starting from the index 2

// Example 2:
// Input: str1 = "inside", str2 = "in"
// Output: 0
// Explanation: we can find "in" in "inside" by starting from the index 0

// Example 3:
// Input: str1 = "inside", str2 = "code"
// Output: -1
// Explanation: we can't find "code" in "inside"


// Brute force solution:
// Time complexity: O(nm)
// Space complexity: O(1)
const substringIndex1 = (str1, str2) => {
    let n = str1.length;
    let m = str2.length;
    for(let i = 0; i <= n-m; i++) {
        let found = true;
        for(let j = 0; j < m; j++) {
            if(str1[i+j] != str2[j]) {
                found = false;
                break;
            }
        }
        if(found) 
            return i;
    }
    return -1;
}

// By using the Knuth-Morris-Pratt algorithm:
// In the getLpsArr() function, we are looping while i is smaller than length of str, but i isn't getting incremented at each index, so we may do more than n iterations. The number of iterations where we don't increment i doesn't exceed n, so in total we have 2n iterations by adding those where we increment i, we get an O(n) time complexity by removing the constant, where n is the length of the string we passed as a parameter
// In the substrIndex() function, getLpsArr() costs m because we are calling it on str2 and str2 has m characters. In the worst case, the while loop does n iterations because n > m, and each iteration costs O(1)
// The total is n+m, but because n > m, then the upper bound of m is n, we can replace m by n, we get:
// T(n,m) = n+m = n+n = 2n = O(n)
// Time complexity: O(n)
// Space complexity: O(m)
const getLpsArr = (str) => {
    let lpsArr = [...Array(str.length)].map(x => 0);
    let length = 0;
    let i = 1;
    while(i < str.length) {
        if(str[i] == str[length])
            lpsArr[i++] = ++length;
        else if(length > 0)
            length = lpsArr[length-1];
        else
            lpsArr[i++] = 0;
    }
    return lpsArr;
}

const substringIndex2 = (str1, str2) => {
    let n = str1.length;
    let m = str2.length;
    if(m > n)
        return -1;
    if(m == n)
        return str2 == str1 ? 0 : -1;
    if(str2 == "")
        return 0;
    let lpsArr = getLpsArr(str2);
    let j = 0;
    let i = 0;
    while(i < n && j < m) {
        if(str1[i] == str2[j]) {
            i++;
            j++;
        } else if(j > 0) {
            j = lpsArr[j-1];
        } else{
            i++;
        }
    }
    return j < m ? -1 : i-j;
}

console.log(substringIndex1("inside", "code"))