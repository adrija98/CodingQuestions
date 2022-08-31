// Given a string str made of 3 types of brackets only (){}[], create a function that checks if the string is valid. The string is considered as valid if all opening brackets are closed with the same type of brackets, and in the correct order.

// Example 1:
// Input: str = "{()}"
// Output: true

// Example 2:
// Input: str = "{(})"
// Output: false

// Example 3:
// Input: str = "[}"
// Output: false

// Time complexity: O(n)
// Space complexity: O(n)
const isValid = (str) => {
    if(str === "")
        return true;
    
    let start = 0, end = str.length;
    let stack = [str[start++]];

    while(start < end) {
        const current = str[start++];
        if (current === "(" || current === "{" || current === "[")
            stack.push(current);
        else {
            let popped = stack.pop();
            switch(current) {
                case ')':
                    if(popped !== "(") return false;
                    break;
                case '}':
                    if(popped !== "{") return false;
                    break;
                case ']':
                    if(popped !== "[") return false;
                    break;
            }
        }
    }

    if(stack.length > 0)
        return false;
    
    return true;
}

console.log(isValid("{[]}"));