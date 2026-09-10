// ------------------------------------------------- prev days questions revise firstly ----------------------------------------------------
// Q1 ---> prefix sum algo -- subArray eqauls to k ?

// let arr = [9, 4, 20, 3, 10, 5], k = 33;

// function prefixSum(arr, k) {
//     let sum = 0, count = 0;
//     let map = new Map();
//     map.set(0, 1);

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];

//         if (map.has(sum - k)) {
//             count += map.get(sum - k);
//         } else if (map.has(sum)) {
//             map.set(sum, map.get(sum) + 1);
//         } else map.set(sum, 1);
//     };

//     return count;
// };

// console.log(prefixSum(arr, k));













//Q2 ---> longest subarray suum which equals to sum k ---> [ Prefix Sum Algorithm ] ?

// let arr = [10, 5, 2, 7, 1, -10], k = 15;
// function longestSubarray(arr, k) {
//     let sum = 0, longest = 0;

//     let map = new Map();
//     map.set(0, -1);

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];

//         if (map.has(sum - k)) {
//             longest = Math.max(longest, (i - map.get(sum - k)));
//         };
//         if (!map.has(sum)) {
//             map.set(sum, i)
//         };
//     };

//     return longest;
// };


// console.log(longestSubarray(arr, k));













//Q3 ---> longest consecutive array --> [ Prefix Sum algorithm ] ?

let nums = [100, 4, 200, 1, 3, 2];

function longestConsecutive(nums) {
    let set = new Set();
    let longest = 0;

    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
        if (set.has(nums[i] - 1)) {
            let count = 1;
            while (set.has(nums[i] + count)) {
                count++;
            };
            longest = Math.max(longest, count);
        };
    };

    return longest;
};

console.log(longestConsecutive(nums));