// Q1 ----> Two Sum ?

// let arr = [11, 2, 5, 7];

// function twoSum(arr, target) {
//     let ans = [];
//     arr.sort((a, b) => a - b);
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) ans.push(i, j);
//         };
//     };
//     return ans;
// };

// console.log(twoSum(arr, 9));







// Q2 ----> prefix - sum ?
// let arr = [9, 4, 20, 3, 10, 5]
// let k = 33;


// function countSum(arr, k) {
//     let sum = 0, count = 0;
//     let map = new Map();
//     map.set(0, 1);

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];

//         if (map.has(sum - k)) {
//             count += map.get(sum - k);
//         } else if (map.has(sum)) {
//             map.set(sum, map.get(sum) + 1)
//         } else {
//             map.set(sum, 1);
//         };
//     };

//     return count;
// };

// console.log(countSum(arr, k));










//Q3 --> longest subArray that sum equals to k ?
let arr = [10, 5, 2, 7, 1, -10], k = 15;

function longestSubarray(arr, k) {
    let sum = 0, longest = 0;
    let map = new Map();
    map.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (map.has(sum - k)) {
            longest = Math.max(longest, (i - map.get(sum - k)));
        };
        if (!map.has(sum)) {
            map.set(sum, i);
        };
    };

    return longest;
};

console.log(longestSubarray(arr, k));