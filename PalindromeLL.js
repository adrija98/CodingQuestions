// Given a linked list of integers list, create a boolean function that checks if it's a palindrome linked list in constant space complexity.

// Example 1:
// Input: list = 1 -> 4 -> 6 -> 5 -> 6 -> 4 -> 1 -> null
// Output: true

// Example 2:
// Input: list = 8 -> 3 -> 1 -> 8 -> null
// Output: false

// Example 3:
// Input: list = 6 -> null
// Output: true

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

const reverseList = (head) => {
    let prev = null, current = head;

    while(current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}


// We can reverse the whole linked list and then compare element by element with the original list
// Time complexity = O(n)
// Space complexity = O(n)
const isPalindrome1 = (list) => {
    // Deep copy
    let temp = JSON.parse(JSON.stringify(list));

    let left = list.head, right = temp.head;
    right = reverseList(right);

    while(left && right) {
        if(left.data !== right.data) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    return true;
}

// 1. We can search for beginning of the right the half
// 2. Reverse the right half
// 3. Compare it element by element with the left half
// Time complexity = O(n)
// Space complexity = O(1)
const isPalindrome2 = (list) => {
    let slow = list.head;
    let fast = list.head;
    while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    slow = reverseList(slow);
    head = list.head;
    while(slow){
      if(slow.data != head.data) return false;
      slow = slow.next;
      head = head.next;
    }
    return true;
}

// Each time searching the position of the right pointer
// Time complexity = O(n^2)
// Space complexity = O(1)
const isPalindrome3 = (list) => {
    let length = 0;
    let temp = list.head;
    while(temp){
        length++;
        temp = temp.next;
    }
    let left = list.head;
    for(let i = 0; i < Math.floor(length/2); i++){
        let right = list.head;
        for(let j = 0; j < length-i-1; j++) right = right.next;
        if(left.data != right.data) return false;
        left = left.next;
    }
    return true;
}

const node1 = new Node(1, new Node(1));
const list = new LinkedList(node1);

console.log(isPalindrome1(list))