// Given a string s, create a recursive function that returns it reversed

// Example 1:
// input: s = "abcd"
// output: "dcba"

// Example 2:
// input: s = "inside code"
// output: "edoc edisni"

// Time complexity = O(n)
// Space complexity = O(n)
const reverse = (str, i = 0, s = "") => {
    if(i === str.length)
        return s;
    else
        return reverse(str, i + 1, str[i] + s);
}

console.log(reverse("abcd"));