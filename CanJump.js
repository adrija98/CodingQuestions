// Given a non-empty array of non-negative integers arr, where each element represents the maximum jump that we can perform from that index, create a boolean function that checks if we can reach the last index starting from the first one.

// Example 1:
// Input: arr = [3, 0, 2, 0, 2, 1, 4, 3]
// Output: true
// Explanation: we can for example jump from arr[0] to arr[2], then from arr[2] to arr[4], then from arr[4] to arr[6], then from arr[6] to arr[7] (the last index)

// Example 2:
// Input: arr = [5, 3, 2, 0, 1, 0, 4]
// Output: false
// Explanation: we have no way to reach the last index


// By using recursion:
// Time complexity: O(2^n)
// Space complexity: O(n)
const canJump1 = (arr, i = 0) => {
    if(i == arr.length - 1) 
        return true;

    for(let j = 1; j <= arr[i]; j++) {
        if(canJump1(arr, i + j)) 
            return true;
    }

    return false;
}


// By using dynamic programming:
// Time complexity: O(n^2)
// Space complexity: O(n)
const canJump2 = (arr) => {
    let n = arr.length;

    let dp = [...Array(n)].map(x => false);
    dp[0] = true;

    for(let i = 0; i < n; i++) {
        if(!dp[i]){
            return false;
        } else if(i + arr[i] >= n-1) {
            return true;
        } else {
            for(let j = 1; j <= arr[i]; j++)
                dp[i + j] = true;
        }
    }

    return dp[n-1];
}


// By keeping track of the max index that we can reach:
// Time complexity: O(n)
// Space complexity: O(1)
const canJump3 = (arr) => {
    let n = arr.length;
    let maxIndex = 0;
    for(let i = 0; i < n; i++){
        if(i > maxIndex) 
            return false;
        else 
            maxIndex = Math.max(maxIndex, i + arr[i]);
    }
    return maxIndex >= n-1;
}