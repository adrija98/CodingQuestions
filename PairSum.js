// Given an array of integers arr and an integer k, create a boolean function that checks if there exist two elements in arr such that we get k when we add them together.

// Time complexity = O(nlogn)
const pairExist1 = (arr, k) => {

    arr = arr.sort((a, b) => a - b);

    let leftPointer = 0, rightPointer = arr.length - 1;
    
    while(leftPointer < rightPointer) {
        const sum = arr[leftPointer] + arr[rightPointer]

        if(sum === k) {
            return true;
        } else if(sum < k) {
            leftPointer++;
        } else if(sum > k) {
            rightPointer++;
        }
    }

    return false;
}

//Time complexity  = O(n)
const pairExist2 = (arr, k) => {
    let visited = {};

    for(element of arr) {
        if(visited[k-element]){
            return true;
        }
        else {
            visited[element] = true;
        }
    }
    
    return false;
}

console.log(pairExist1([4, 5, 1, -3, 6], 11));