// Given a non-empty rotated sorted array of integers arr that has no duplicates, create a function that returns the minimum.
// Note that the array is sorted in ascending order, and that it's rotated by an unknown number of positions to the right.

// Example 1:
// Input: arr = [4, 5, 1, 2, 3]
// Output: 1

// Example 2:
// Input: arr = [45, 66, 70, 71, 80, 89, -6, -2, -1, 0, 3, 5, 6, 8, 11, 15, 20, 23]
// Output: -6


// By traversing the whole array:
// Time complexity: O(n)
// Space complexity: O(1)
const findMin1 = (arr) => {
    return Math.min(...arr);
  }


// By using divide and conquer (iteratively):
// Time complexity: O(logn)
// Space complexity: O(1)
const findMin2 = (arr) => {
    let left = 0;
    let right = arr.length-1;

    if(arr[right] > arr[left]) 
        return arr[left];

    while(left < right) {
        let mid = Math.floor((left + right)/2);
        if(arr[mid + 1] < arr[mid]) 
            return arr[mid + 1];
        else if(arr[mid] < arr[mid - 1]) 
            return arr[mid];
        else if(arr[mid] > arr[right]) 
            left = mid + 1;
        else 
            right = mid - 1;
    }

    return arr[left];
}

console.log(findMin2([2, 3, 4, 5, 1]))
console.log(findMin2([45, 66, 70, 71, 80, 89, -6, -2, -1, 0, 3, 5, 6, 8, 11, 15, 20, 23]))