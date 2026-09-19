// ---------------------------------------------- Linked list Again -----------------------------------------------

class Node {
    constructor(val) {
        this.val = val;
        this.next = null
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
            console.log('Empty List');
            return;
        };

        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        };
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

        temp.next = temp.next.next
    };

    insertAtIndex(index, val) {
        let newNode = new Node(val);

        let temp = this.head;
        for (let i = 0; i < index; i++){
            temp = te
        }
    }


    printAll() {
        if (this.head == null) {
            console.log('Empty List');
            return;
        };

        let temp = this.head;
        while (temp != null) {
            process.stdout.write(temp.val + ' -> ');
            temp = temp.next;
        };
        console.log('Null')
    };
};

let obj = new LinkedList;
obj.insertAtFirst(10);
obj.insertAtFirst(20);
obj.insertAtFirst(30);
obj.insertAtFirst(40);
obj.insertAtFirst(50);

obj.insertAtLast(10000);

obj.printAll()


obj.deleteAtLast();

obj.printAll()



