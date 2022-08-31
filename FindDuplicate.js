// Given an array of integers arr that contains n+1 elements between 1 and n inclusive, create a function that returns the duplicate element (the element that appears more than once). Assume that:
// - There is only one duplicate number
// - The duplicate number can be repeated more than once

const findDuplicate1 = (arr) => {
    visited = {}

    for(element of arr) {
        if(visited[element]) {
            return element
        } else {
            visited[element] = true;
        }
    }

    return null;
}

// By using Floyd's cycle detection algorithm (tortoise and hare):
// Time complexity: O(n)
// Space complexity: O(1)
const findDuplicate2 = (arr) => {
    let hare = 0, tortoise = 0;
    do {
      tortoise = arr[tortoise];
      hare = arr[arr[hare]];
    } while(tortoise != hare);

    tortoise = 0;

    while(tortoise != hare) {
      tortoise = arr[tortoise];
      hare = arr[hare];
    }
    
    return tortoise;
  }

console.log(findDuplicate([1, 4, 2, 2, 5, 2]));