// Given a string str made of digits, create a function that returns with how many ways we can decode it, knowing that 1 is decoded as the letter A, 2 is decoded as the letter B, and so on until 26 that is decoded as the letter Z.

// Example 1:
// Input: str = "6324120129"
// Output: 4
// Explanation: we can decode the string as "FCBDATABI" (6 3 2 4 1 20 1 2 9), or "FCBDATLI" (6 3 2 4 1 20 12 9), or "FCXATABI" (6 3 24 1 20 1 2 9), or "FCXATLI" (6 3 24 1 20 12 9)

// Example 2:
// Input: str = "12"
// Output: 2
// Explanation: we can decode the string as "AB" (1 2), or "L" (12)

// Example 3:
// Input: str = "12345"
// Output: 3
// Explanation: we can decode the string as "ABCDE" (1 2 3 4 5), or "AWDE" (1 23 4 5), or "LCDE" (12 3 4 5)

// By using recursion:
// Time complexity: O(φ^n) (φ = golden ratio = 1.618033...)
// Space complexity: O(n)
const waysToDecode1 = (str, i = 0) => {
    let n = str.length;
    if(n == 0 || (i < n && str[i] == "0"))
        return 0;
    else if(i >= n-1)
        return 1;
    else if((str[i] + str[i+1]) >= "10" &&  (str[i] + str[i+1]) <= "26")
        return waysToDecode1(str, i+1) + waysToDecode1(str, i+2);
    else
        return waysToDecode1(str, i+1);
}

// By using dynamic programming:
// Time complexity: O(n)
// Space complexity: O(1)
const waysToDecode = (str) => {
    let n = str.length;

    if(n == 0 || str[0] == "0") 
        return 0;

    let beforePrevious = 1;
    let previous = 1;

    for(let i = 1; i < n; i++) {
        let current = 0;
        if(str[i] != "0")
            current += previous;
        if((str[i-1] + str[i]) >= "10" && (str[i-1] + str[i]) <= "26")
            current += beforePrevious;
        beforePrevious = previous;
        previous = current;
    }
    
    return previous;
  }
  