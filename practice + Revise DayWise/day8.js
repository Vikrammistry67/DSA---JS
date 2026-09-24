// ----------------------------------- Tree - Revision --------------------------------------------------

// Design Tree 

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    };
};

let prompt = require('prompt-sync')();
class Tree {
    buildTree() {
        let data = prompt('Enter Value ');
        if (data == -1) return null;

        let root = new Node(data);
        console.log('Enter left node of ', data);
        root.left = this.buildTree();
        console.log('Enter right node of ', data);
        root.right = this.buildTree();

        return root;

    };

    preOrder(root) {
        if (root == null) return;
        process.stdout.write(root.val + ' ');
        this.preOrder(root.left);
        this.preOrder(root.right);
    };

    postOrder(root) {
        if (root == null) return;
        this.preOrder(root.left);
        this.preOrder(root.right);
        process.stdout.write(root.val + ' ');
    };


    inOrder(root) {
        if (root == null) return;
        this.preOrder(root.left);
        process.stdout.write(root.val + ' ');
        this.preOrder(root.right);
    };
};




let obj = new Tree();
let root = obj.buildTree();
console.log(' preOrder traversal ')
obj.preOrder(root);
console.log('  postOrder traversal ')
obj.postOrder(root);
console.log(' inOrder traversal ')
obj.inOrder(root);