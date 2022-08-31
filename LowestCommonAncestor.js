// Given a binary tree root and two integers num1 and num2, create a function that returns the lowest common ancestor of num1 and num2. The lowest common ancestor is the deepest node in root that has both num1 and num2 as descendants, and we consider a node as a descendant of itself.
// Note that all values are unique and that num1 and num2 always exist in the tree.

// Example 1:
// Input: root = [4, 10, 6, 5, null, 7, 13, 2, 18, 1, null, 8, 16, 14, 9, null, null, null, null, null, null, null, null, null, null, 22, 3], num1 = 7, num2 = 16
// Output: 6

// Example 2:
// Input: root = [4, 10, 6, 5, null, 7, 13, 2, 18, 1, null, 8, 16, 14, 9, null, null, null, null, null, null, null, null, null, null, 22, 3], num1 = 2, num2 = 13
// Output: 4

// Example 3:
// Input: root = [4, 10, 6, 5, null, 7, 13, 2, 18, 1, null, 8, 16, 14, 9, null, null, null, null, null, null, null, null, null, null, 22, 3], num1 = 9, num2 = 18
// Output: 5


class Tree {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// By getting paths:
// Time complexity: O(n)
// Space complexity: O(h)
const getPath = (root, path, num) => {
    if(root == null) 
        return false;
    path.push(root);
    if(root.data == num) 
        return true;
    if(getPath(root.left, path, num) || getPath(root.right, path, num))
        return true;
    path.pop();
    return false;
}

const lowestCommonAncestor1 = (root, num1, num2) => {
    let pathNum1 = [];
    let pathNum2 = [];
    if(!getPath(root, pathNum1, num1) || !getPath(root, pathNum2, num2))
        return null;
    let minLength = Math.min(pathNum1.length, pathNum2.length);
    let i = 0;
    while(i < minLength) {
        if(pathNum1[i] == pathNum2[i]) 
            i++;
        else 
            break;
    }
    return pathNum1[i-1];
}

// By checking if num1 is on the left and num2 is on the right or the opposite:
// Time complexity: O(n)
// Space complexity: O(h)
const lowestCommonAncestor2 = (root, num1, num2) => {
    if(root == null) 
        return null;
    if(root.data == num1 || root.data == num2) 
        return root;
    let leftLCA = lowestCommonAncestor(root.left, num1, num2);
    let rightLCA = lowestCommonAncestor(root.right, num1, num2);
    if(leftLCA && rightLCA) 
        return root;
    return leftLCA != null ? leftLCA : rightLCA;
  }
  
  
  