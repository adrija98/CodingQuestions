// Given a string str made of alphabetical letters only, create a function that returns the length of the longest substring without repeating characters.

// Example 1:
// Input: str = "abcdbeghef"
// Output: 6
// Explanation: the longest substring without repeating characters is "cdbegh", its length is 6

// Example 2:
// Input: str = "aaaaa"
// Output: 1
// Explanation: the longest substring without repeating characters is "a", its length is 1

// Example 3:
// Input: str = "eddy"
// Output: 2
// Explanation: the longest substring without repeating characters is "ed" (or "dy"), its length is 2


// Time complexity: O(n)
// Space complexity: O(1) becasue at any point only unique alphabets will be present in the object so max (26 * 2) alphabets (a-z, A-Z)
const longestUniqueSubstring1 = (str) => {
    let windowStart = 0, windowEnd = 0, maxLength = -Infinity;
    let characters = {};

    if(str.length === 0) {
        return 0;
    }

    if(str.length === 1) {
        return 1;
    }

    while(windowEnd < str.length) {
        const ch = str[windowEnd];
        if(characters[ch]) {
            while(characters[ch]) {
                delete characters[str[windowStart]];
                windowStart++;
            }
        } else {
            characters[ch] = true;
            windowEnd++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart);
    }

    return maxLength;
}

// Time complexity: O(n)
// Space complexity: O(1)
const longestUniqueSubstring2 = (str) => {
    let maxLength = 0;
    let start = 0;
    let indexes = [...Array(128)].map(x => -1);

    for(let i = 0; i < str.length; i++) {
        if(indexes[str.charCodeAt(i)] >= start) {
            start = indexes[str.charCodeAt(i)]+1;
        }

        indexes[str.charCodeAt(i)] = i;
        maxLength = Math.max(maxLength, i-start+1);
    }

    return maxLength;
}

console.log(longestUniqueSubstring1("aaaa"));