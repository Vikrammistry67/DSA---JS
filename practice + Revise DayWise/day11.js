// ---------------------------------------------- Design Linked List ------------------------------------------------------

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
            console.log('Not Possible');
            return;
        };

        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        };

        temp.next = newNode;
        this.size++;
    };

    deleteAtFirst() {
        if (this.head == null) {
            console.log('Not Possible');
            return;
        };

        this.head = this.head.next;
    };

    deleteAtLast() {
        if (this.head == null) {
            console.log('Not Possible');
            return;
        };

        let temp = this.head;
        while (temp.next.next != null) {
            temp = temp.next;
        };

        temp.next = temp.next.next;
    };

    insertAtIndex(index, val) {
        let newNode = new Node(val);
        if (index > this.size && this.size < 0) {
            console.log('Not Possible');
            return;
        };

        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            newNode.next = temp.next;
            temp.next = newNode;
        };

    };

    deleteAtIndex(index) {
        if (this.size < 0 && this.size > index) {
            console.log('Not Possible');
            return;
        };

        let temp = this.head;
        for (let i = 0; i < index - 1; i++){
            temp = temp.next;
        };
        temp.next = temp.next.next
    };

    traverseList() {
        if (this.head == null) {
            console.log('Not Possible');
            return;
        };

        let temp = this.head;
        while (temp != null) {
            process.stdout.write(temp.val + ' -> ');
            temp = temp.next;
        };
        console.log('NUll')
    };
};


let obj = new LinkedList();
obj.insertAtFirst(10);

obj.insertAtFirst(20);
obj.insertAtFirst(30);
obj.insertAtFirst(40);
obj.insertAtFirst(50);

obj.traverseList();


obj.insertAtLast(1000);
obj.traverseList();


obj.deleteAtFirst();
obj.traverseList();

obj.deleteAtLast();
obj.traverseList();


obj.insertAtIndex(2, 450);
obj.traverseList();


obj.deleteAtIndex();
obj.traverseList();