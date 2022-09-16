// Given a board of characters and a string word, create a boolean function that checks if we can find the word in the board. Note that the word must be made with adjacent cells (horizontal and vertical neighbours), and that the same cell can be used only once.

// Example 1:
// Input: board = [['K','I','N','T'], 
//                 ['B','I','N','S'], 
//                 ['G','N','Y','I'], 
//                 ['U','O','E','D'], 
//                 ['D','I','B','V'], 
//                 ['H','I','R','T']], word = "INSIDE"
// Output: true

const exist = (board, word) => {
    let visited = new Array(board.length).fill(false).map(() => new Array(board[0].length).fill(false));
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === word[0])
                if(rec(board, word, i, j, 0, visited))
                    return true;
        }
    }
    return false;
}

const rec = (board, word, row, column, i, visited) => {
    if(i === word.length)
        return true;
    if(row === board.length || row < 0 || column === board[0].length || column < 0 || visited[row][column] || word[i] !== board[row][column])
        return false;
    else {
        visited[row][column] = true;
        if(rec(board, word, row, column + 1, i + 1, visited) ||
        rec(board, word, row + 1, column, i + 1, visited) ||
        rec(board, word, row, column - 1, i + 1, visited) ||
        rec(board, word, row - 1, column, i + 1, visited)) {
            return true;
        } else {
            visited[row][column] = false;
            return false;
        }
    }
}

console.log(exist([['K','I','N','T'], ['B','I','N','S'],['G','N','Y','I'],['U','O','E','D'],['D','I','B','V'], ['H','I','R','T']], word = "INSIDE"));
console.log(exist([['K','I','N','T'], ['B','I','N','S'], ['G','N','Y','I'], ['U','O','E','D'], ['D','I','B','V'], ['H','I','R','T']], word = "CODE"));