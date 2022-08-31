// Given an array of integers arr that has at least two elements, create a function that returns an array output where output[i] represents the product of all elements of arr except arr[i], and you are not allowed to use the division operator.

// Example 1:
// Input: arr = [2, 5, 3, 4]
// Output: [60, 24, 40, 30]
// Explanation: output[0] = 5*3*4 = 60, output[1] = 2*3*4 = 24, output[2] = 2*5*4 = 40, output[3] = 2*5*3 = 30


// Brute force solution:
// Time complexity: O(n^2)
// Space complexity: O(n)
const productExceptSelf1 = (arr) => {
    let n = arr.length;
    let output = [];

    for(let i = 0; i < n; i++) {
        let product = 1;
        for(let j = 0; j < n; j++) {
            if(i !== j)
                product *= arr[j];
        }
        output.push(product);
    }
}

// By using cumulative product:
// Time complexity: O(n)
// Space complexity: O(n)
const productExceptSelf2 = (arr) => {
    let n = arr.length;

    let cumulativeFromLeft = [...Array(n)].map(x => 0);
    cumulativeFromLeft[0] = 1;
    for(let i = 1; i < n; i++)
        cumulativeFromLeft[i] = cumulativeFromLeft[i-1] * arr[i-1];

    let cumulativeFromRight = [...Array(n)].map(x => 0);
    cumulativeFromRight[n-1] = 1;
    for(let i = n-2; i >= 0; i--)
        cumulativeFromRight[i] = cumulativeFromRight[i+1] * arr[i+1];

    let output = [...Array(n)].map(x => 0);
    for(let i = 0; i < n; i++)
        output[i] = cumulativeFromLeft[i] * cumulativeFromRight[i];
    
    return output;
}