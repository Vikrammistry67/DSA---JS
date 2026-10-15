// ----------------------------------------------  Queue  -----------------------------------------
// Linear Data Structure.
// Based on FIFO based.


// Queue Behaviour ---> 1 ( Linked List ) & 2 ( Array ) ?

// 1 --> Linked List Way.



// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.front = null;
//     }

//     enqueue(val) {
//         const newNode = new Node(val);

//         // First node
//         if (this.front === null) {
//             this.front = newNode;
//             return;
//         }

//         // Find the last node
//         let temp = this.front;

//         while (temp.next !== null) {
//             temp = temp.next;
//         }

//         temp.next = newNode;
//     }

//     dequeue() {
//         if (this.front === null) {
//             console.log("Empty Queue");
//             return;
//         }

//         this.front = this.front.next;
//     }

//     printQueue() {
//         if (this.front === null) {
//             console.log("Empty Queue");
//             return;
//         }

//         let temp = this.front;

//         while (temp !== null) {
//             process.stdout.write(temp.val + " -> ");
//             temp = temp.next;
//         }

//         console.log("Null");
//     }
// }

// const obj = new Queue();

// obj.enqueue(10);
// obj.enqueue(20);
// obj.enqueue(30);
// obj.enqueue(40);
// obj.enqueue(50);

// obj.printQueue();

// obj.dequeue();
// obj.printQueue();












// 2 ----> Array Way ?

class Queue{
    constructor() {
        this.q = [];
    };

    offer(val) {
        if (this.q.length == 0) {
            console.log('Empty Queue');
            return;
        };

        this.q.push(val);
    };


    poll() {
        if (this.q.length == 0) {
            console.log('Empty Queue');
            return;
        };

        this.q.shift();
    };


};


let obj = new Queue();
obj.offer(10);
obj.offer(20);
obj.offer(30);
obj.offer(40);
obj.offer(50);




