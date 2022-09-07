// Given a positive integer k and string num that represents a positive integer, create a function that returns as a string, the smallest number that can be made by removing k digits from num. Note that both input and output don't contain leading zeroes, except for the number 0 itself.

// Example 1:
// Input: num = "825563", k = 2
// Output: "2553"

// Example 2:
// Input: num = "83866", k = 3
// Output: "36"

// Example 3:
// Input: num = "20050", k = 1
// Output: "50"

// Time complexity: O(n)
// Space complexity: O(n)
const smallestAfterRemoving = (num, k) => {
    if(k == num.length) 
        return "0";
        
    let stack = [];
    for(digit of num) {
        while(stack.length > 0 && digit < stack[stack.length-1] && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    while(k-- > 0) 
        stack.pop();
    stack = stack.reverse();
    
    while(stack.length > 0 && stack[stack.length-1] == "0") 
        stack.pop();

    stack = stack.reverse();

    return stack.length > 0 ? stack.join("") : "0";
}

console.log(smallestAfterRemoving("20050", 1));