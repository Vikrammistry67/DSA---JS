// ---------------------------------------- Linked List -----------------------------------
// Middle of the Linked List ?

// function middleNode(head) {
//     let slow = head, fast = head;
//     while (fast != null && fast.next != null) {
//         slow = slow.next;
//         fast = fast.next.next;
//     };

//     return slow;
// };


// console.log(middleNode([1, 2, 3, 4, 5]));






// Merge Two Sorted Lists ?
// function mergeLists(list1, list2) {
//     if (list1 == null) return list1;
//     if (list2 == null) return list2;


//     if (list1.val < list2.val) {
//         list1.next = mergeLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeLists(list1, list2.next);
//         return list2;
//     };
// };


// console.log(mergeLists([1, 2, 4], [1, 3, 4]));








// Reverse Linked List ?
// function reverseList(head) {
//     let prev = null;
//     let curr = head;

//     while (curr != null) {
//         let temp = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = temp;
//     };

//     return prev;

// };

// console.log(reverseList([1, 2, 3, 4, 5]));













// Linked List cycle ?

// function hasCycle(head) {
//     if (head == null && head.next == null) return false;

//     let slow = head, fast = head;
//     while (fast != null && fast.next != null) {
//         slow = slow.next;
//         fast = fast.next.next;
//         if (slow == fast) return true;
//     };
//     return false;

// };


// console.log(hasCycle([3, 2, 0, -4]))






// Linked List Cycle ( ii )  ?
// var detectCycle = function (head) {
//     if (head === null || head.next === null) return null;

//     let slow = head;
//     let fast = head;
//     let hasCycle = false;

//     // Step 1: Detect if a cycle exists
//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;
//         if (slow === fast) {
//             hasCycle = true;
//             break;
//         }
//     }

//     // If no cycle was found, return null (or -1 depending on LeetCode problem requirements)
//     if (!hasCycle) return null;

//     // Step 2: Find the exact start node of the cycle
//     let pointer1 = head;
//     let pointer2 = slow;
//     let index = 0;

//     while (pointer1 !== pointer2) {
//         pointer1 = pointer1.next;
//         pointer2 = pointer2.next;
//         index++;
//     }

//     // Returns the actual node where the cycle starts
//     return pointer1;
// };


// console.log(detectCycle())














// reverse - K Group    