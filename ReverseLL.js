// Given a linked list of integers list, create a function that reverses it in-place without using an additional data structure.

// Example 1:
// Input: list = 5 -> 3 -> 6 -> 4 -> 7 -> null
// Output: 7 -> 4 -> 6 -> 3 -> 5 -> null

// Example 2:
// Input: list = 1 -> 2 -> 3 -> null
// Output: 3 -> 2 -> 1 -> null

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

// Swapping lengths
// Time complexity = O(n)
// Space complexity = O(1)
const reverseList1 = (list) => {
    let previous = null;
    let current = list.head;

    while(current != null) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    list.head = previous;
}

// Swapping values
// Time complexity = O(n^2)
// Space complexity = O(1)
const reverseList2 = (list) => {
    let length = 0;
    let temp = list.head;

    while(temp) {
        length++;
        temp = temp.next;
    }
    
    let left = list.head;
    for(let i = 0; i < Math.floor(length/2); i++) {
        let right = list.head;
        for(let j = 0; j < length-i-1; j++) 
            right = right.next;
        [left.data, right.data] = [right.data, left.data];
        left = left.next;
    }
}

const display = (list) => {
    let current = list.head;

    while(current !== null) {
        console.log(current.data);
        current = current.next;
    }
}

const node5 = new Node(5);
const node3 = new Node(3);
const node6 = new Node(6);
const node4 = new Node(4);
const node7 = new Node(7);

node5.next = node3;
node3.next = node6;
node6.next = node4;
node4.next = node7;

const list = new LinkedList(node5);

reverseList1(list)
display(list)