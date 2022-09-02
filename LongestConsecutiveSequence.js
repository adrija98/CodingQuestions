// Given an array of integers arr, create a function that returns the length of the longest consecutive sequence that can we found in arr.

// Example 1:
// Input: arr = [14, 1, 8, 4, 0, 13, 6, 9, 2, 7]
// Output: 4
// Explanation: the longest consecutive sequence is 6 7 8 9

// Example 2:
// Input: arr = [4, 5, 2, 6, 5, 4, 1, -5, 0, 4]
// Output: 3
// Explanation: the longest consecutive sequence is 4 5 6

// Example 3:
// Input: arr = [5, 10]
// Output: 1
// Explanation: the longest consecutive sequence is 5 (also 10)


// Brute force solution:
// Time complexity: O(n^3)
// Space complexity: O(1)
const longestConsecutiveSequence1 = (arr) => {
    if(arr.length < 2) 
        return arr.length;

    let maxLength = 1;

    for(let element of arr){
        let left = element;
        while(arr.includes(left-1)) 
            left--;
        let right = element;
        while(arr.includes(right+1)) 
            right++;

        maxLength = Math.max(maxLength, right-left+1);
    }

    return maxLength;
}

// By sorting the array:
// Time complexity: O(nlogn)
// Space complexity: O(1) if we are allowed to modify the input, O(n) else
const longestConsecutiveSequence2 = (arr) => {
    if(arr.length < 2) 
        return arr.length;
    arr.sort((a, b) => a - b);

    let maxLength = 1;
    let length = 1;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] == arr[i-1] + 1) 
            length++;
        else if(arr[i] == arr[i-1]) 
            {}
        else 
            length = 1;

        maxLength = Math.max(maxLength, length);
    }

    return maxLength;
}

// Optimized brute force solution:
// Time complexity: O(n)
// Space complexity: O(n)
const longestConsecutiveSequence3 = (arr) => {
    if(arr.length < 2) 
        return arr.length;

    let maxLength = 1;
    let values = new Set(arr);

    values.forEach(element => {
        if(values.has(element-1)) 
            return;
        else {
            let right = element;
            while(values.has(right+1)) 
                right++;

            maxLength = Math.max(maxLength, right-element+1);
        }
    });

    return maxLength;
}

console.log(longestConsecutiveSequence1([8, 10, 12, 0, 2, 1, 13, -3, -4, 2, 3, -1, 8, -2, 15]))