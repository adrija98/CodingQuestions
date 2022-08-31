// Given a linked list of integers list, create a function that sorts it.
// Note that the function returns nothing, the linked list must be sorted in-place.

// Example 1:
// Input: list = 4 -> 8 -> 1 -> 6 -> 2 -> 5 -> null
// Output: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> null

class Node{
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}
  
class LinkedList{
    constructor(head = null) {
      this.head = head;
    }
}

const bubbleSort = (list) => {
    let i = list.head;
    while(i) {
        let j = list.head;
        while(j.next) {
            if(j.data > j.next.data) {
                [j.data, j.next.data] = [j.next.data, j.data];
            }
            j = j.next;
        }
        i = i.next;
    }
}


// Space complexity: O(logn)
// Explanation:
// A recursive call isn't using input-size related extra space but the call stack size is in O(logn) because we are dividing the input size by 2 at each call, so:
// S(n) = O(logn)
const mergeSortedLists = (head1, head2) => {
    let ptr1 = head1;
    let ptr2 = head2;
    let returnedHead = null;
    let tail = null;
    let lower;
    while(ptr1 || ptr2) {
        if(ptr1 && ptr2) {
            if(ptr1.data < ptr2.data) {
                lower = ptr1;
                ptr1 = ptr1.next;
            } else {
                lower = ptr2;
                ptr2 = ptr2.next;
            }
        } else if(ptr1) {
            lower = ptr1;
            ptr1 = ptr1.next;
        } else {
            lower = ptr2;
            ptr2 = ptr2.next;
        }
        if(returnedHead === null) {
            returnedHead = lower;
            tail = lower;
        } else {
            tail.next = lower;
            tail = tail.next;
        }
    }
    return returnedHead;
}
  
const mergeSort = (head) => {
    if(head === null || head.next === null) return head;
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let headRightHalf = slow.next;
    slow.next = null;
    head = mergeSort(head);
    headRightHalf = mergeSort(headRightHalf);
    return mergeSortedLists(head, headRightHalf);
}
  
const sortList = (list) => {
    list.head = mergeSort(list.head);
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

sortList(list)
display(list)