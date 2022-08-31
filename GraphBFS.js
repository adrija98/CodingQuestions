// Given an undirected graph of integers graph, represented by an adjacency list, and an integer root, create a function that prints its values in breadth first search, by considering the vertex whose value is root as the arbitrary node.

// Example 1:
// Input: graph = {"5" : [8, 1, 12], "8" : [5, 12, 14, 4], "12" : [5, 8, 14], "14" : [8, 12, 4], "4" : [8, 14], "1" : [5, 7], "7" : [1, 16], "16" : [7]}, root = 5
// Output: 5 8 1 12 14 4 7 16

class Graph{
    constructor(adjList = {}){
        // the adjacency list is of type Object<Number,Array<Number>>
        this.adjList = adjList;
    }
}

// Time complexity: O(|V|+|E|)
// Space complexity: O(|V|)
const bfs = (graph, root) => {
    let visited = {};
    let queue = [root];
    visited[root] = true;

    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current);

        for(let neighbour of graph.adjList[current]) {
            if(!visited[neighbour]) {
                queue.push(neighbour);
                visited[neighbour] = true;
            }
        }
    }
}