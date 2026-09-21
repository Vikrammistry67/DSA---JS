let prompt = require('prompt-sync')();

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    };
};



class Tree {
    buildTree() {
        let data = prompt('Enter data');
        if (data == -1) return null;

        let root = new Node(data);
        console.log('Enter left node of ', root);

        root.left = this.buildTree();
        console.log('Enter right node of ', root);

        root.right = this.buildTree();

        return root;

    };
};


let obj = new Tree();
obj.buildTree();
console.log(obj);
