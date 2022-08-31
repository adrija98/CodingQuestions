// Given a binary tree if integers root, create a boolean function that checks if it's a balanced binary tree. A binary tree is considered as balanced if its left and right subtree are balanced, and the difference between their heights is at most 1

// Example 1:
// Input: root = [5, 8, 1, 6, 7, 2, 3, 9, null, null, null, null, null, null, 4]
// Output: true

// Example 2:
// Input: root = [5, 8, null, 6, 7, 9]
// Output: false
// Explanation: the height of the left subtree is 3, but the height of the right subtree is 0, the difference is greater than 1, we deduce that the tree is not balanced


class Tree {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
}

// Time complexity: O(nlogn)
// Space complexity: O(h)
const isBalanced1 = (root) => {
    if(root == null) 
        return true;

    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced1(root.left) && isBalanced2(root.right);
}

const getHeight = (root) => {
    if(root === null)
        return -1;
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}


// Time complexity: O(n)
// Space complexity: O(h)
const isBalanced2 = (root) => {
    let output = [true];
	rec(root, output);
	return output[0];
}

const rec = (root, output) => {
	if(root == null) 
        return -1;

	let leftHeight = rec(root.left, output);
	let rightHeight = rec(root.right, output);
    
	if(Math.abs(leftHeight - rightHeight) > 1) 
        output[0] = false;

	return 1 + Math.max(leftHeight, rightHeight);
}