// Given an array of integers arr, create a function that returns all its possible permutations without duplicates, the order doesn't matter.

// Example 1:
// Input: arr = [1, 2, 3]
// Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

// Example 2:
// Input: arr = [1, 2, 2]
// Output: [[1, 2, 2], [2, 1, 2], [2, 2, 1]]


// By using recursion:
// Time complexity: O(n.n!)
// Space complexity: O(n.n!)
const getPermutations = (arr) => {
    if(arr.length < 2) {
        return [arr];
    } else {
        let permutations = [];
        for(let i = 0; i < arr.length; i++) {
            if(!arr.slice(0, i).includes(arr[i])) {
                let remainingElems = [...arr];
                remainingElems.splice(i, 1)
                let remainingPermutations = getPermutations(remainingElems);

                for(let permutation of remainingPermutations) {
                    permutation.push(arr[i]);
                    permutations.push(permutation);
                }
            }
        }
        return permutations;
    }
}

console.log(getPermutations([1, 2]))