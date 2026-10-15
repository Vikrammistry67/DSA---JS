// -------------------------------------------------- STACK DATA STRUCTURE ---------------------------------------------------------------
// 1 ---> Stack is a Linear Data Structure.
// 2 ---> Stack is work on LIFO ( Last In First Out ) principle.


// Questions ?
// 1 --> Reverse Queue ? [ 1, 2, 3, 4, 5 ]; ==> [ 5 , 4, 3, 2, 1 ] ?


let queue = [1, 2, 3, 4, 5];
console.log('Before -> ', queue);

function reverseQueue(queue) {
    let stack = [];

    while (queue.length > 0) {
        stack.push(queue.shift());
    };

    while (stack.length > 0) {
        queue.push(stack.pop());
    }

};


reverseQueue(queue);

console.log('After -> ', queue);








// 2 ---> Valid Parantheses ?

