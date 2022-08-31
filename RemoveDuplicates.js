// Given an array of integers arr, create a function that returns an array containing the values of arr without duplicates (the order doesn't matter).

// Time complexity = O(n)
const removeDuplicates1 = (arr) => {
    let visited = {};

    for(element of arr) {
        visited[element] = true;
    }
    
    return Object.keys(visited).map(x => parseInt(x));
}

// Time complexity = O(nlogn)
const removeDuplicates2 = (arr) => {
    if(arr.length == 0) 
        return [];

    arr = arr.sort((a, b) => a - b);

    let noDuplicatesArr = [arr[0]];

    arr.forEach((element, i) => {
        if(i > 0 && arr[i] != arr[i-1])
            noDuplicatesArr.push(element);
    });

    return noDuplicatesArr;
}

console.log(removeDuplicates1([4, 2, 5, 3, 3, 1, 2, 4, 1, 5, 5, 5, 3, 1]));