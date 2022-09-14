// Given a string s, create a recursive boolean function that checks if it has adjacent duplicates (the same character appearing in two successive indexes)

// Example 1:
// input: str = "programming"
// output: true

// Example 2:
// input: s = "ababa"
// output: false

// Example 3:
// input: s = "pssst"
// output: true

// Time complexity = O(logn)
// Space complexity = O(1) because we have used tail recursion
const hasAdjacentDuplicates = (str, i = 1) => {
    if(i >= str.length)
        return false;
    else if(str[i] === str[i - 1])
        return true;
    else
        return hasAdjacentDuplicates(str, i + 1);
}

console.log(hasAdjacentDuplicates("programming"));
console.log(hasAdjacentDuplicates("ababa"));
console.log(hasAdjacentDuplicates("pssst"));