// ------------------------------------------------------------ TREE -------------------------------------------------------------------------------

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     };
// };


// let prompt = require('prompt-sync')();
// class Tree {
//     buildTree() {
//         let data = prompt('Enter Data ');
//         if (data == -1) return null;

//         let root = new Node(data);

//         console.log('Enter left node of : ', data);
//         root.left = this.buildTree();

//         console.log('Enter right node of : ', data);
//         root.right = this.buildTree();

//         return root;
//     };


//     preOrder(root) {
//         if (root == null) return;

//         process.stdout.write(root.val + ' ');
//         this.preOrder(root.left);
//         this.preOrder(root.right);
//     };


//     postOrder(root) {
//         if (root == null) return;
//         this.postOrder(root.left);
//         this.postOrder(root.right);
//         process.stdout.write(root.val + ' ');
//     };


//     inOrder(root) {
//         if (root == null) return;
//         this.inOrder(root.left);
//         process.stdout.write(root.val + ' ');
//         this.inOrder(root.right);
//     };

// };


// let obj = new Tree();
// let root = obj.buildTree();
// obj.preOrder(root);
// obj.postOrder(root);
// obj.inOrder(root);







// Max - Height Of Node


// function maxHeight(root) {
//     if (root == null) return 0;
//     let left = maxHeight(root.left);
//     let right = maxHeight(root.right);

//     return (Math.max(left + right) + 1);
// };

// console.log(maxHeight([1, null, 2]))







// Level Order Traversal ?
    // function levelOrder(root) {
    //     let ans = [];
    //     if (root == null) return ans;

    //     let q = [];
    //     q.push(root);
    //     while (q.length != 0) {
    //         let size = q.length;
    //         let curr = [];
    //         for (let i = 0; i < size; i++) {
    //             let node = q.shift();
    //             curr.push(node.val);
    //             if (node.left != null) q.push(node.left);
    //             if (node.right != null) q.push(node.right);
    //         };
    //         ans.push(curr);
    //     };
    //     return ans;
    // };
    // console.log(levelOrder([3, 9, 20, null, null, 15, 7]));
