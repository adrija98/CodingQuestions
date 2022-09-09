// Given a non-empty binary tree root, create a function that returns the maximum path sum. Note that for this problem, a path goes from a node to another one by traversing edges between them, and that the path must have at least one node, and it does not have to pass by the root.

// Example 1:
// Input: root = [11, 1, 2, 4, null, 5, 10, null, 2, null, 8]
// Output: 33

class Tree{
    constructor(data, left = null, right = null){
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  

// Time complexity: O(n)
// Space complexity: O(h)
const dfs = (root, globalMaxSum) => {
    if(root === null) {
        return -Infinity;
    } else {
        let left = dfs(root.left, globalMaxSum);
        let right = dfs(root.right, globalMaxSum);
        let maxFromTop = Math.max(root.data, root.data+left, root.data+right);
        let maxNoTop = Math.max(maxFromTop, root.data+left+right);
        globalMaxSum[0] = Math.max(globalMaxSum[0], maxNoTop);
        return maxFromTop;
    }
}
  
const maxPathSum = (root) => {
    let globalMaxSum = [-Infinity];
    dfs(root, globalMaxSum);
    return globalMaxSum[0];
}