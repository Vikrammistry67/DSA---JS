// Happy Number ?

// function isHappy(n) {
//     let set = new Set();
//     while (true) {
//         let sum = 0;
//         let temp = n;
//         while (temp > 0) {
//             let rem = temp % 10;
//             sum += (rem * rem);
//             temp = Math.floor(temp / 10);
//         };

//         if (sum == 1) return true;
//         else if (set.has(sum)) return false;
//         else set.add(sum);
//         n = sum;
//     };
// };

// let n = 19;

// if (isHappy(n)) {
//     console.log("Happy");
// } else {
//     console.log("Not");
// }









// 2 ----> frequency of an character ?
// let str = 'Bengaluruu';

// function frequency(str) {
//     let map = new Map();

//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);

//         if (map.has(char)) {
//             map.set(char, map.get(char) + 1);
//         } else map.set(char, 1);
//     };
//     return map;
// };

// console.log(frequency(str));









//3 ---> find first duplicate character ?
// let str = 'abccdaa';

// function firstDuplicate(str) {
//     let map = new Map();
//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);

//         if (map.has(char)) {
//             map.set(char, map.get(char) + 1);
//             if (map.has(char) == 1) return char;
//         } else map.set(char, 1);
//     };
// };

// console.log(firstDuplicate(str));












//4 --> sort the people ?
// let names = ['vikku', 'akash', 'rahul'];
// let heights = [140, 160, 120];

// function sort(names, heights) {
//     let map = new Map();


//     for (let i = 0; i < names.length; i++) {
//         map.set(heights[i], names[i]);
//     };

//     let ans = [];
//     heights.sort((a, b) => b - a);

//     for (let i = 0; i < heights.length; i++) {
//         ans[i] = map.get(heights[i]);
//     };

//     return ans;
// };

// console.log(sort(names, heights));





// 5 Two Sum ?

// let nums = [11, 2, 15, 7], target = 9;

// function twoSum(nums, target) {
//     let ans = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) ans.push(i, j);
//         };
//     };

//     return ans;
// };

// console.log(twoSum(nums, target));





// Optimized Way ? 
let nums = [11, 2, 15, 7], target = 9;

function twoSum(nums, target) {
    let map = new Map();

    let ans = [-1, -1];
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            ans[0] = i;
            ans[1] = map.get(target - nums[i])
        } else map.set(nums[i], i)
    };

    return ans;
};

console.log(twoSum(nums, target));