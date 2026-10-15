// design Linked List --

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};


class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    };

    insertAtFirst(val) {
        let newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
            return;
        };

        newNode.next = this.head;
        this.head = newNode;
    };

    insertAtLast(val) {
        if (this.head == null) {
            console.log('Empty List');
            return;
        };

        let newNode = new Node(val);
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        };
        this.size++;
        temp.next = newNode;
    };

    insertAtIndex(index, val) {
        if (index < 0 || index > this.size) {
            console.log('Not Possible');
            return;
        };

        let newNode = new Node(val);
        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next;
        };

        this.size++;
        newNode.next = temp.next;
        temp.next = newNode;

    };




    deleteAtFirst() {
        if (this.head == null) {
            console.log('Empty List');
            return;
        };

        this.head = this.head.next;
    };

    deleteAtLast() {
        if (this.head == null) {
            console.log('Empty List');
            return;
        };

        let temp = this.head;
        while (temp.next.next != null) {
            temp = temp.next;
        };
        this.size--;
        temp.next = temp.next.next;
    };

    deleteAtIndex(index) {
        if (index < 0 || index > this.size) {
            console.log('Not Possible');
            return;
        };

        if (this.head == null) {
            console.log('Empty List');
            return;
        };

        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next;
        };
        this.size--;
        temp.next = temp.next.next;
    };


    printLinkedList() {
        if (this.head == null) {
            console.log('Not Possible');
            return;
        };

        let temp = this.head;
        while (temp != null) {
            process.stdout.write(temp.val + ' -> ');
            temp = temp.next;
        };
        this.size++;
        console.log('Null')
    };
};


let obj = new LinkedList();
obj.insertAtFirst(10);
obj.insertAtFirst(20);
obj.insertAtFirst(30);
obj.insertAtFirst(40);
obj.insertAtFirst(50);



obj.printLinkedList();


obj.insertAtLast(300);
obj.printLinkedList();


obj.insertAtIndex(3, 567);
obj.printLinkedList();


obj.deleteAtFirst();
obj.printLinkedList();

obj.deleteAtLast();
obj.printLinkedList();


obj.deleteAtIndex(3);
obj.printLinkedList();








2 -- Find Middle List ?

