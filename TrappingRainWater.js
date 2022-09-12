// Given an array of N non-negative integers arr[] representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// Input: arr[] = {2, 0, 2}
// Output: 2

// nput: arr[]   = {3, 0, 2, 0, 4}
// Output: 7

// INTUITION
// An element of the array can store water if there are higher bars on the left and the right. 
// The amount of water to be stored in every position can be found by finding the heights of bars on the left and right sides. 
// The total amount of water stored is the summation of the water stored in each index.

// For every element (except first & last), we find the maximum height on left and right side of it. Take the minimum of the two and subtract the element value.
// Time complexity = O(n^2)
// Space complexity = O(n)
const maxWater1 = (arr) => {
    let water = 0;
 
    for(let i = 1; i < arr.length - 1; i++) {
        let left = arr[i];
        for(let j = 0; j < i; j++) {
            left = Math.max(left, arr[j]);
        }
        let right = arr[i];
        for(let j = i + 1; j < arr.length; j++) {
            right = Math.max(right, arr[j]);
        }
        water += Math.min(left, right) - arr[i];
    }
    return water;
}

// For every element we can precalculate and store the highest bar on the left and on the right (say stored in arrays left[] and right[]). 
// Then iterate the array and use the precalculated values to find the amount of water stored in this index, which is the same as ( min(left[i], right[i]) – arr[i] )
// Time complexity = O(n)
// Space complexity = O(n)
const maxWater2 = (arr) => {
    let left = new Array(arr.length);
    let right = new Array(arr.length);

    let water = 0;

    left[0] = arr[0];
    for (let i = 1; i < arr.length; i++)
        left[i] = Math.max(left[i - 1], arr[i]);

    right[arr.length - 1] = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--)
        right[i] = Math.max(right[i + 1], arr[i]);

    for (let i = 0; i < arr.length; i++)
        water += Math.min(left[i], right[i]) - arr[i];

    return water;
}