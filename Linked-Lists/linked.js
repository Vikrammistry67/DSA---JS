// create Node ---->

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
        this.size++;
    };

    deleteAtFirst() {
        if (this.head == null) {
            console.log('Empty List');
            return;
        };
        this.size--;
        this.head = this.head.next;
    };

    insertAtLast(val) {
        this.size++;
        let newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
            return;
        };

        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        };

        temp.next = newNode;
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


let nodeOne = new LinkedList();
nodeOne.insertAtFirst(10);
nodeOne.insertAtFirst(20);
nodeOne.insertAtFirst(30);
nodeOne.insertAtFirst(40);
nodeOne.insertAtFirst(50);
nodeOne.insertAtFirst(250);

nodeOne.printAll();

nodeOne.deleteAtFirst();

nodeOne.printAll();

nodeOne.insertAtLast(400);  

nodeOne.printAll();

nodeOne.deleteAtLast();

nodeOne.printAll();
