// --------------------------------------- Hashing -----------------------------------------------

//Q1 --> subArray sums equals to k ?

// let nums = [10, 2, -2, -20, 10], k = -10;

// function countSum(nums, k) {
//     let sum = 0, count = 0;
//     let map = new Map();
//     map.set(0, 1);

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         if (map.has(sum - k)) {
//             count += map.get(sum - k);
//         } else if (map.has(sum)) {
//             map.set(sum, map.get(sum) + 1);
//         } else {
//             map.set(sum, 1);
//         };
//     };

//     return count;
// };

// console.log(countSum(nums, k));








// Q2 ---> Longest Subarray with Sum K ?

// let nums = [10, 5, 2, 7, 1, -10], k = 15;

// function longestSubarray(nums, k) {
//     let sum = 0, longest = 0;
//     let map = new Map();
//     map.set(0, -1);

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];

//         if (map.has(sum - k)) {
//             longest = Math.max(longest, (i - map.get(sum - k)));
//         };
//         if (!map.has(sum)) {
//             map.set(sum, i);
//         };
//     };

//     return longest;
// };


// console.log(longestSubarray(nums, k));






// Q3 ---> Intersection of Two arrays ?

// let nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];

// function Intersection(nums1, nums2) {
//     let ans = [];
//     let set = new Set(nums1);

//     for (let i = 0; i < nums2.length; i++){
//         if (set.has(nums2[i]) && !ans.includes(nums2[i])) ans.push(nums2[i]);
//     };

//     return ans;
// };

// console.log(Intersection(nums1, nums2));







//Q4 ---> Contiguous Array ?

// let nums = [0, 1], k = 0;

// function maxLength(nums, k) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 0) nums[i] = -1;
//     };

//     let sum = 0, longest = 0;
//     let map = new Map();
//     map.set(0, -1);


//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];

//         if (map.has(sum - k)) {
//             longest = Math.max(longest - (i - map.get(sum - k)));
//         };
//         if (!map.has(sum)) map.set(sum, i);
//     };

//     return longest;
// };

// console.log(maxLength(nums, k));











// Q5 ---> Longest Consecutive Sequence ?
// let nums = [100, 4, 200, 1, 3, 2];

// function longestConsecutive(nums) {
//     let set = new Set(nums);

//     let longest = 0;


//     for (let num of set) {
//         if (set.has(num - 1)) continue;

//         let current = num;
//         let count = 1;

//         while (set.has(current + 1)) {
//             count++;
//             current++;
//         };

//         longest = Math.max(longest, count);
//     };



//     return longest;
// };

// console.log(longestConsecutive(nums));






















// ------------------------------------------------------ TREE -------------------------------------------------------

// Q1 --> Design a Tree ?

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



//     // BFS --->
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
//         this.postOrder(root.left);
//         process.stdout.write(root.val + ' ');
//         this.postOrder(root.right);
//     };
// };


// let obj = new Tree();
// let root = obj.buildTree();
// obj.preOrder(root);
// obj.postOrder(root);
// obj.inOrder(root);








// Q2 --> Level Order Traversal ?


// function levelOrder(root) {
//     let ans = [];
//     if (root == null) return ans;

//     let q = [root];
//     let front = 0;

//     while (front < q.length) {
//         let size = q.length - front;
//         let curr = [];

//         for (let i = 0; i < size; i++) {
//             let temp = q[front++];

//             curr.push(temp.val);

//             if (temp.left != null) q.push(temp.left);
//             if (temp.right != null) q.push(temp.right);
//         }

//         ans.push(curr);
//     }

//     return ans;
// }


// console.log(levelOrder([3, 9, 20, null, null, 15, 7]))










// Q3 ---> check whether is tree is Symmetric or not ?

var solve = function (p, q) {
    if (p == null && q == null) return true;
    if ((p == null && q != null) || (p != null && q == null)) return false;

    if (p.val == q.val) {
        let left = solve(p.left, q.right);
        let right = solve(p.right, q.left);
        return left && right;
    };
    return false;
};


var isSymmetric = function (root) {
    if (root == null) return true;
    return solve(root.left, root.right);
};


console.log(isSymmetric([1, 2, 2, null, 3, null, 3]))