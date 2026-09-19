// 1 --> Permutation ?

// var solve = function (nums, ans, curr, isVisited, i) {
//     if (i == nums.length) {
//         ans.push([...curr]);
//         return;
//     };

//     for (let j = 0; j < nums.length; j++) {
//         if (!isVisited[j]) {
//             isVisited[j] = true;
//             curr.push(nums[j]);
//             solve(nums, ans, curr, isVisited, i + 1);
//             isVisited[j] = false;
//             curr.pop();
//         }
//     }
// }
// var permute = function (nums) {
//     let ans = [];
//     let curr = [];
//     let isVisited = new Array(nums.length).fill(false)
//     solve(nums, ans, curr, isVisited, 0);
//     return ans;
// };


// console.log(permute([1, 2, 3].sort((a,b) => a-b)))










// 2 --> subsetsWithDup ?

// var solve = function (nums, ans, curr, i) {
//     if (i == nums.length) {
//         ans.push([...curr]);
//         return;
//     };


//     curr.push(nums[i]);
//     solve(nums, ans, curr, i + 1);
//     curr.pop();
//     while (i + 1 < nums.length && nums[i] == nums[i + 1]) { i++ };

//     solve(nums, ans, curr, i + 1);

// }
// var subsetsWithDup = function (nums) {
//     nums.sort((a, b) => a - b);

//     let ans = [];
//     let curr = [];

//     solve(nums, ans, curr, 0);
//     return ans;
// };