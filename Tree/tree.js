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
//         let data = prompt('Enter value ');
//         if (data == -1) return null;

//         let root = new Node(data);
//         console.log('Enter left node  of : ', data);
//         root.left = this.buildTree();

//         console.log('Enter right node of : ', data);
//         root.right = this.buildTree();


//         return root;
//     };


//     // Data -> left -> right
//     preOrder(root) {
//         if (root == null) return;
//         process.stdout.write(root.val + ' '); //data
//         this.preOrder(root.left); //left
//         this.preOrder(root.right); //right
//     };


//     // left -> right -> data.
//     postOrder(root) {
//         if (root == null) return;

//         this.postOrder(root.left);
//         this.postOrder(root.right);
//         process.stdout.write(root.val + ' ');

//     };


//     // left -> data -> right.
//     inOrder(root) {
//         if (root == null) return;

//         this.inOrder(root.left);
//         process.stdout.write(root.val + ' ');
//         this.inOrder(root.right);

//     };

// };



// let obj = new Tree();
// let root = obj.buildTree();

// console.log('preOrder traversal -----> ')
// obj.preOrder(root);

// console.log('postOrder traversal -----> ')
// obj.postOrder(root);

// console.log('inOrder traversal -----> ')
// obj.inOrder(root);





// Q1/- ----> Level Order Traversal ?

// var levelOrder = function (root) {
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






// Q2 ----> Symmetric Tree ?
function solve(p, q) {
    if (p == null && q == null) return true;
    if ((p == null && q != null) || (p != null && q == null)) return false;

    if (p.val == q.val) {
        let left = solve(p.left, q.right);
        let right = solve(p.right, q.left);
        return left && right;
    };
    return false;
};

function isSymmetric(root) {
    if (root == null) return true;
    return solve(root.left, root.right);
};

console.log(isSymmetric([1, 2, 2, null, 3, null, 3]));