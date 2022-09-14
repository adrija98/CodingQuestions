// Given an array of integers arr and integer num, create a recursive function that returns the number of occurrences of num in arr

// Example 1:
// input: arr = [4, 2, 7, 4, 4, 1, 2], num = 4
// output: 3

// Example 2:
// input: arr = [4, 2, 7, 4, 4, 1, 2], num = 8
// output: 0

// Time complexity = O(logn)
// Space complexity = O(1) because we have used tail recursion
const countOccurrences = (arr, num, i = 0, count = 0) => {
    if(i == arr.length)
        return count
    else if(arr[i] === num)
        return countOccurrences(arr, num, i+1, count + 1);
    else
        return countOccurrences(arr, num, i+1, count);
}

console.log(countOccurrences([4, 2, 7, 4, 4, 1, 2], 4));
console.log(countOccurrences([4, 2, 7, 4, 4, 1, 2], 8));