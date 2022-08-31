// Given a string str, create a function that returns the first repeating character.
// If such character doesn't exist, return the null character '\0'.

// Time complexity = O(n)
const getFirstRepeatingCharacter = (str) => {
    let visited = {};

    for(ch of str) {
        if(visited[ch]) {
            return ch;
        } else {
            visited[ch] = true;
        }
    }

    return null;
}

console.log(getFirstRepeatingCharacter("Halo"));