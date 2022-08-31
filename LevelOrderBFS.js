// Given a binary tree root, create a function that prints its nodes in level order (level by level).

// Example 1:
// Input: root = [5, 10, 3, 4, 6, null, 7, null, 8, 9, 1, 2]
// Output: 5 10 3 4 6 7 8 9 1 2

class Tree {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// Time complexity: O(n)
// Space complexity: O(n)
const levelOrderBFS = (root) => {
    if(root === null) 
        return [];

    const result = []
    const queue = [root];

    while(queue.length > 0) {
        const current = queue.shift();

        result.push(current.data);

        if(current.left)
            queue.push(current.left);
        if(current.right)
            queue.push(current.right);
    }

    result.forEach((x) => console.log(x));
}

const node5 = new Tree(5);
const node10 = new Tree(10);
const node3 = new Tree(3);
const node4 = new Tree(4);
const node6 = new Tree(6);
const node7 = new Tree(7);
const node8 = new Tree(8);
const node9 = new Tree(9);
const node1 = new Tree(1);
const node2 = new Tree(2);

node5.left = node10;
node5.right = node3;
node10.left = node4;
node10.right = node6;
node3.right = node7;
node4.right = node8;
node6.left = node9;
node6.right = node1;
node7.left = node2;

levelOrderBFS(node5);