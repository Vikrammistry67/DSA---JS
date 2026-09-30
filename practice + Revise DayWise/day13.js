// ---------------------------------------------------- design Linked List ----------------------------------------------------------------
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
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
        let newNode = new Node(val);
        if (this.head == null) {
            console.log('not possible');
            return;
        };

        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        };

        temp.next = newNode;
        this.size++;
    };

    insertAtIndex(index, val) {
        let newNode = new Node(val);
        if (index < 0 || index > this.size) {
            console.log('Not possible');
            return
        };

        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next;
        };

        newNode.next = temp.next;
        temp.next = newNode;
        this.size++;
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

        temp.next = temp.next.next;
        this.size++;
    };


    deleteAtIndex(index) {
        if (index < 0 || index > this.size) {
            console.log('Not possible');
            return;
        };

        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next;
        };

        temp.next = temp.next.next;
    };

    printLinkedList() {
        if (this.head == null) {
            console.log('Not possible');
            return;
        };

        let temp = this.head;
        while (temp != null) {
            process.stdout.write(temp.val + ' -> ');
            temp = temp.next;
        };
        console.log('NUll');
        this.size++;
    };

};

let obj = new LinkedList();
obj.insertAtFirst(10);
obj.insertAtFirst(20);
obj.insertAtFirst(30);
obj.insertAtFirst(40);
obj.insertAtFirst(50);

obj.printLinkedList();
obj.insertAtLast(1000);
obj.printLinkedList();


obj.insertAtIndex(3, 45000);
obj.printLinkedList();


obj.deleteAtFirst();
obj.printLinkedList();


obj.deleteAtLast();
obj.printLinkedList();


obj.deleteAtIndex(3);
obj.printLinkedList();