// Given a non-empty array of integers arr, create a function that returns the sum of the subarray that has the greatest sum.
// We don't consider the empty array [] as a subarray.

// Time complexity = O(n^2)
const maximumSubarray1 = (arr) => {
    let maxSum = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        cumulativeSum = 0
        for(let j = i; j < arr.length; j++) {
            cumulativeSum += arr[j];
            maxSum = Math.max(maxSum, cumulativeSum);
        }  
    }
    return maxSum;
}

// By using Kadane's algorithm:
// Time complexity: O(n)
// Space complexity: O(1)
const maximumSubarray = (arr) => {
    let globalSum = -Infinity;
    let localSum = 0;
    for(let element of arr) {
        localSum = Math.max(element, localSum + element);
        globalSum = Math.max(globalSum, localSum);
    }
    return globalSum;
}

console.log(maximumSubarray1([2, 3, -1, 4, -10, 2, 5]))