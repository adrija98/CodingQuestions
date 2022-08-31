// Given a string str made of alphabetical letters only, create a function that returns the length of the longest palindrome string that can be made from letters of str

// Example 1:
// Input: str = "abbaba"
// Output: 5
// Explanation: one of the longest palindromes that can be made is "baaab", its length is 5

// Example 2:
// Input: str = "abbaaa"
// Output: 6
// Explanation: one of the longest palindromes that can be made is "baaaab", its length is 6

// Example 3:
// Input: str = "abbabab"
// Output: 7
// Explanation: one of the longest palindromes that can be made is "bbaaabb", its length is 7

// Example 4:
// Input: str = "abdccdceeebebc"
// Output: 13
// Explanation: one of the longest palindromes that can be made is "eedccbabccdee", its length is 13


// Time complexity: O(n)
// Space complexity: O(1)
const longestPalindrome1 = (str) => {
    let maxLength = 0;
    let character = {};
    let oddTaken = false;

    for(const ch of str) {
        if(!character[ch]) {
            character[ch] = 0;
        }
        character[ch]++;
    }

    for(const key of Object.keys(character)) {
        if(character[key] % 2 === 0) {
            maxLength += character[key]
        } else {
            if(oddTaken) {
                maxLength += character[key] - 1;
            } else {
                maxLength += character[key];
                oddTaken = true;
            }
        }
    }

    return maxLength;
}

// Time complexity: O(n)
// Space complexity: O(1)
const longestPalindrome2 = (str) => {
    let occurrences =  [...Array(128)].map(x => 0);

    for(const letter of str.split("")) {
      occurrences[letter.charCodeAt(0)]++;
    }

    let length = 0;
    for(const occu of occurrences) {
      length += occu % 2 == 0 ? occu : occu - 1;
    }

    if(length < str.length) {
        length++;
    }
    return length;
}

console.log(longestPalindrome1("abdccdceeebebc"))