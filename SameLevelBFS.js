// Given a binary tree of integers root, create a function that returns an array where each element represents an array that contains the elements at the level i.

// Example 1:
// Input: root = [5, 10, 3, 4, 6, null, 7, null, 8, 9, 1, 2]
// Output: [[5], [10, 3], [4, 6, 7], [8, 9, 1, 2]]

class Tree {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const getValuesByLevel = (root) => {
    if (root === null )
        return [[]];

    let queue = [root];
    let elements = []
    let eleIdx = 0;
    let levelTrack = [0];
    
    while(queue.length > 0) {
        const current = queue.shift();
        elements.push(current.data);

        if(current.left) {
            queue.push(current.left);
            levelTrack.push(levelTrack[eleIdx] + 1);
        }

        if(current.right) {
            queue.push(current.right);
            levelTrack.push(levelTrack[eleIdx] + 1);
        }

        eleIdx++;
    }

    let results = [...Array(levelTrack[levelTrack.length - 1] + 1)].map(x => [])

    for(let i = 0; i < elements.length; i++) {
        results[levelTrack[i]].push(elements[i]);
    }

    return results;
}

const node6 = new Tree(6);
const node3 = new Tree(-3);
const node1 = new Tree(1);
const node15 = new Tree(15);

node6.left = node3;
node6.right = node1;
node3.left = node15;

console.log(getValuesByLevel(node6));