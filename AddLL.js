// Given two linked lists list1 and list2 that represent two positive integers, create a function that returns the linked list that represents their sum.
// Note that the two integers don't contain any leading zero except the number 0 itself, and that each node contains one digit only, and that the digits are stored in reverse order.

// Example 1:
// Input: list1 = 3 -> 2 -> 1 -> null, list2 = 5 -> 9 -> 4 -> 3 -> null
// Output: 8 -> 1 -> 6 -> 3 -> null
// Explanation: 123 + 3495 = 3618

// Example 2:
// Input: list1 = 1 -> 6 -> 5 -> 4 -> null, list2 = 4 -> 8 -> 2 -> 7 -> 9 -> null
// Output: 5 -> 4 -> 8 -> 1 -> 0 -> 1 -> null
// Explanation: 4561 + 97284 + 101845

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }
}

// Time complexity: O(n)
// Space complexity: O(max(n,m))
const addTwoLinkedLists = (list1, list2) => {
    let output = new LinkedList();
    let ptr1 = list1.head;
    let ptr2 = list2.head ;
    let tail = null;
    let carry = 0;

    while(ptr1 || ptr2 || carry > 0) {
        let digit1 = ptr1 ? ptr1.data : 0;
        let digit2 = ptr2 ? ptr2.data : 0;

        let nextDigit = (digit1 + digit2 + carry) % 10;
        carry = Math.floor((digit1 + digit2 + carry) / 10);
        let newNode = new Node(nextDigit);

        if(output.head === null) {
            output.head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = tail.next;
        }

        ptr1 = ptr1 ? ptr1.next : null;
        ptr2 = ptr2 ? ptr2.next : null;
    }
    
    return output;
}

const b = new Node(5);
let list1 = new LinkedList(b);

const c = new Node(5);
let list2 = new LinkedList(c);

console.log(addTwoLinkedLists(list1, list2));