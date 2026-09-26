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