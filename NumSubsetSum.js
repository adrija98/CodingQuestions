// Given an array arr of strictly positive integers, and an integer k, create a function that returns the number of subsets of arr that sum up to k.

// Example 1:
// Input: arr = [1, 2, 3, 1], k = 4
// Output: 3
// Explanation: subsets that sum up to k are [1, 2, 1], [1, 3], and [3, 1]

// Example 2:
// Input: arr = [1, 2, 3, 1, 4], k = 6
// Output: 4
// Explanation: subsets that sum up to k are [1, 2, 3], [1, 1, 4], [2, 3, 1], and [2, 4]

// Example 3:
// Input: arr = [2, 4, 2, 6, 8], k = 7
// Output: 0
// Explanation: there are no subsets that sum up to k


// By using recursion:
// Time complexity: O(2^n)
// Space complexity: O(n)
const subsetsThatSumUpToK1 = (arr, k, i = 0, sum = 0) => {
    if(sum == k)
        return 1;
    else if(sum > k || i >= arr.length)
        return 0;
    else
        return subsetsThatSumUpToK1(arr, k, i+1, sum + arr[i]) + subsetsThatSumUpToK1(arr, k, i+1, sum);
}

// By using recursion + memoization:
// Time complexity: O(nk)
// Space complexity: O(nk)
const subsetsThatSumUpToK2 = (arr, k, i = 0, sum = 0, memoiz = {}) => {
    let key = i + " " + sum;
    if(memoiz[key] !== undefined)
      return memoiz[key];
    else if(sum == k)
      return 1;
    else if(sum > k || i >= arr.length)
      return 0;
    else {
      let nbSubsets = subsetsThatSumUpToK2(arr, k, i+1, sum + arr[i], memoiz) + subsetsThatSumUpToK2(arr, k, i+1, sum, memoiz);
      memoiz[key] = nbSubsets;
      return nbSubsets;
    }
  }

console.log(subsetsThatSumUpToK2([1, 2, 3, 1], 4));