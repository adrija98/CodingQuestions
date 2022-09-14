// Given a positive integer n, create a recursive function that returns the sum of its digits

// Example 1:
// input: n = 425
// output: 11

// Example 2:
// input: n = 8009
// output: 17

// Example 3:
// input: n = 0
// output: 0

// Time complexity = O(logn)
// Space complexity = O(1) because we have used tail recursion
const sumOfDigits = (n, sum = 0) => {
    if(n < 0)
        return sumOfDigits(-n)
    else if(n < 10)
        return n + sum
    else {
        let last = n % 10;
        return sumOfDigits(Math.floor(n/10), sum + last);
    }
}

console.log(sumOfDigits(-425));