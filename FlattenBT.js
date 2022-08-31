// Given a binary tree root, create a function that flattens it to a linked list in-place by following the preorder traversal.

// Example 1:
// Input: root = [1, 2, 5, 3, 4, 6]
// Output: [1, null, 2, null, 3, null, 4, null, 5, null, 6]

class Tree{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// Time complexity: O(n^2)
// Space complexity: O(h)
const flattenTree1 = (root) => {
    if(root === null) 
        return;
    else {
        flattenTree1(root.left);
        flattenTree1(root.right);

        let rightSubtree = root.right;

        root.right = root.left;
        root.left = null;

        let temp = root;
        while(temp.right)
            temp = temp.right;
        temp.right = rightSubtree;
    }
}

// Time complexity: O(n)
// Space complexity: O(h)
let head = null;
const flattenTree2 = (root) => {
    if(root === null) 
        return;
    else {
        flattenTree2(root.right);
        flattenTree2(root.left);

        root.left = null;
        root.right = head;
        head = root;
	}
}

const node1 = new Tree(1)
const node2 = new Tree(2);
const node3 = new Tree(3);
const node4 = new Tree(4);
const node5 = new Tree(5);
const node6 = new Tree(6);

node1.left = node2;
node1.right = node5;
node2.left = node3;
node2.right = node4;
node5.left = node6;

flattenTree(node1);
console.log(node1);