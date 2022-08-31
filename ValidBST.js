class Tree {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// By recursively checking if every node respects its own range:
// Time complexity: O(n)
// Space complexity: O(h)
const validBST1 = (root, min = -Infinity, max = Infinity) => {
    if(root === null)
        return true;
    else if(root.data <= min || root.data >= max)
        return false;
    else
        return isBst(root.left, min, root.data) && isBst(root.right, root.data, max);
}

// Time complexity: O(n)
// Space complexity: O(h)
// PROPERTY of BST ---- inorder traversal gives elements in sorted order
const validBST2 = (root) => {
    let precedent = [-Infinity];
    return isBstRec(root, precedent);
}
  
const isBstRec = (root, precedent) => {
    if(root === null) 
        return true;
    if(!isBstRec(root.left, precedent)) 
        return false;
    if(root.data <= precedent[0]) 
        return false;
    else 
        precedent[0] = root.data;
    if(!isBstRec(root.right, precedent)) 
        return false;
    return true;
}