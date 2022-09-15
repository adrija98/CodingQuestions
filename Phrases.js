// Given an array of arrays of words (List[List[str]]) arr, create a function that returns all the possible phrases that can be made, a phrase is made by concatenating one word from each array of arr, and separating them by spaces. For example, if arr has 3 arrays, a phrase will be a word from arr[0] + a space + a word from arr[1] + a space + a word from arr[2]

// Example 1:
// input: arr = [['I', 'You', 'They'], ['love', 'hate'], ['food', 'games']]
// output: ['I love food', 'I love games', 'I hate food', 'I hate games', 'You love food', 'You love games', 'You hate food', 'You hate games', 'They love food', 'They love games', 'They hate food', 'They hate games']

// Example 2:
// input: arr = [["John", "Tom", "Jack"], ["cooks", "eats"], ["chicken", "rice", "spaghetti", "fish"]]
// output: ["John cooks chicken", "John cooks rice", "John cooks spaghetti", "John cooks fish", "John eats chicken", "John eats rice", "John eats spaghetti", "John eats fish", "Tom cooks chicken", "Tom cooks rice", "Tom cooks spaghetti", "Tom cooks fish", "Tom eats chicken", "Tom eats rice", "Tom eats spaghetti", "Tom eats fish", "Jack cooks chicken", "Jack cooks rice", "Jack cooks spaghetti", "Jack cooks fish", "Jack eats chicken", "Jack eats rice", "Jack eats spaghetti", "Jack eats fish"]

// Time complexity = O(m^n ns)
// Space complexity = O(m^n ns)
const phrases = (arr, i = 0, phrase = [], result = []) => {
    if(i === arr.length) {
        result.push(new Array(...phrase));
    }
    else {
        for(let word of arr[i]) {
            phrase.push(word);
            phrases(arr, i+1, phrase, result);
            phrase.pop();
        }
    }
    return result;
}

console.log(phrases([["John", "Tom", "Jack"], ["cooks", "eats"], ["chicken", "rice", "spaghetti", "fish"]]))