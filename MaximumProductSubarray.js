// Given an array Arr[] that contains N integers (may be positive, negative or zero). Find the product of the maximum product subarray.

// Example 1:
// Input:
// N = 5
// Arr[] = {6, -3, -10, 0, 2}
// Output: 180
// Explanation: Subarray with maximum product
// is [6, -3, -10] which gives product as 180.
// Example 2:

// Example 2:
// Input:
// N = 6
// Arr[] = {2, 3, 4, 5, -1, 0}
// Output: 120
// Explanation: Subarray with maximum product
// is [2, 3, 4, 5] which gives product as 120.

// Time complexity = O(n^2)
// Space complexity = O(1)
const maxProduct1 = (arr) => {
    let result = arr[0];
  
    for (let i = 0; i < arr.length; i++) {
        let mul = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            result = Math.max(result, mul);
            mul *= arr[j];
        }
        result = Math.max(result, mul);
    }
    return result;
}

// Time complexity = O(n)
// Space complexity = O(n)
const maxProduct2 = (arr) => {
    let maxLeft = arr[0];
    let maxRight = arr[0];
    
    let zeroPresent = false;
    
    let prod = 1;
    for(let ele of arr) {
        prod *= ele;
        if(i == 0) {
            zeroPresent = true;
            prod = 1;
            continue;
        }
        maxLeft = Math.max(maxLeft,prod);
    }
    
    prod = 1;
    for(let j = arr.length - 1; j >= 0; j--) {
        prod *= arr[j];
        if(arr[j] == 0) {
            zeroPresent = true;
            prod = 1;
            continue;
        }
        maxRight = Math.max(maxRight,prod);
    }
    
    if(zeroPresent) 
        return Math.max(Math.max(maxLeft,maxRight), 0);

    return Math.max(maxLeft,maxRight);
}

console.log(maxProduct2([6, -3, -10, 0, 2]));