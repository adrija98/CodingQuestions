// Given a binary search tree root, and an integer num, create a function that deletes the node that contains num then returns root.

// Example 1:
// Input: root = [12, 3, 23, 2, 5, 15, 38, null, null, 4, 10, null, null, null, null, null, null, 8, 11, 7, null, null, null], num = 5
// Output: [12, 3, 23, 2, 7, 15, 38, null, null, 4, 10, null, null, null, null, null, null, 8, 11]

class Tree {
    constructor(data, left = null, right = null){
      this.data = data;
      this.left = left;
      this.right = right;
    }
}
  
const getMinNode = (root) => {
    while(root.left !== null) 
        root = root.left;
    return root;
}

// Time complexity: O(h)
// Space complexity: O(h)
const deleteNodeBst = (root, num) => {
    if(root === null) {
        return null;
    } else if(num < root.data) {
        root.left = deleteNodeBst(root.left, num);
    } else if(num > root.data) {
        root.right = deleteNodeBst(root.right, num);
    } else {
        if(root.left === null) {
            return root.right;
        } else if(root.right === null) {
            return root.left;
        } else {
            let successor = getMinNode(root.right);
            root.data = successor.data;
            root.right = deleteNodeBst(root.right, successor.data);
        }
    }
    return root;
}
  
  
  