// Given an undirected graph of integers graph, represented by an adjacency list, and an integer root, create a function that prints its values in depth first search, by considering the vertex whose value is root as the arbitrary node.

// Example 1:
// Input: graph = {"5" : [8, 1, 12], "8" : [5, 12, 14, 4], "12" : [5, 8, 14], "14" : [8, 12, 4], "4" : [8, 14], "1" : [5, 7], "7" : [1, 16], "16" : [7]}, root = 5
// Output: 5 8 12 14 4 1 7 16

class Graph{
    constructor(adjList = {}){
        // the adjacency list is of type Object<Number,Array<Number>>
        this.adjList = adjList;
    }
}

// Iterative Approach
// Time complexity: O(|V|+|E|)
// Space complexity: O(|V|)
const dfs = (graph, root) => {
    let visited = {};

    let stack = [root];
    visited[root] = true;

    while(stack.length > 0) {
        let current = stack.pop();
        console.log(current);
        for(let neighbour of graph.adjList[current]) {
            if(!visited[neighbour]) {
                stack.push(neighbour);
                visited[neighbour] = true;
            }
        }
    }
}

// Recursive Approach
// Time complexity: O(|V|+|E|)
// Space complexity: O(|V|)
const dfsRec = (graph, root, visited = new Set()) => {
    if(visited.has(root)) 
        return;
    else{
        console.log(root);
        visited.add(root);
        for(let neighbour of graph.adjList[root])
            dfs(graph, neighbour, visited);
    }
}

const graph = new Graph({5 : [8, 1, 12], 8 : [5, 12, 14, 4], 12 : [5, 8, 14], 14 : [8, 12, 4], 4 : [8, 14], 1 : [5, 7], 7 : [1, 16], 16 : [7]})
dfs(graph, 5);