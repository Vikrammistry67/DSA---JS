// Happy Number ?

// let n = 19;

// function ishappy(n) {
//     let set = new Set();
//     while (true) {
//         let sum = 0;
//         let temp = n;
//         while (temp > 0) {
//             let rem = temp % 10;
//             sum += (rem * rem);
//             temp = Math.floor(temp / 10);
//         };

//         if (sum === 1) return true;
//         if (set.has(sum)) return false;
//         set.add(sum);
//         n = sum;
//     }
// };

// console.log(ishappy(n) ? 'Happy Number' : 'No');







// Maximum SubArray ?
// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// function maximumSubArray(nums) {
//     let sum = 0, maxSum = nums[0];

//     for (let i = 0; i < nums.length; i++){
//         sum += nums[i];

//         maxSum = Math.max(sum, maxSum);

//         if (sum < 0) sum = 0;
//     };

//     return maxSum;
//  };
// console.log(maximumSubArray(nums));





//Q3 --> SubArray equals to Sum ?
// let nums = [10, 2, -2, -20, 10], k = -10;

// function cntSubarrays(nums, k) {
//     let count = 0, sum = 0;
//     let map = new Map();
//     map.set(0, 1);
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];

//         if (map.has(sum - k)) {
//             count += map.get(sum - k);
//         };
//         if (map.has(sum)) {
//             map.set(sum, map.get(sum) + 1);
//         } else map.set(sum, 1);
//     };

//     return count;
// };

// console.log(cntSubarrays(nums , k))






//Q4 ---> longest subArray ?
// let nums = [10, 5, 2, 7, 1, -10], k = 15;

// function longest(nums, k) {
//     let longest = 0, sum = 0;
//     let map = new Map();
//     map.set(0, -1);

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];

//         if (map.has(sum - k)) {
//             longest = Math.max(
//                 longest,
//                 (i - map.get(sum - k))
//             )
//         };

//         if (!map.has(sum)) {
//             map.set(sum , i)
//         };
//     };

//     return longest;
// };

// console.log(longest(nums, k));












//Q5 ---> Contiguous Array ?

// let nums = [0, 1, 1, 1, 1, 1, 0, 0, 0];


// function findMaxLength(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 0) nums[i] = -1;
//     };

//     let sum = 0, longest = 0, k = 0;
//     let map = new Map();
//     map.set(0, -1);

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         if (map.has(sum - k)) {
//             longest = Math.max(longest, (i - map.get(sum - k)));
//         };

//         if (!map.has(sum)) map.set(sum, i);
//     };


//     return longest;
// };

// console.log(findMaxLength(nums));







// Longest Consecutive Sequence ?

// let nums = [100, 4, 200, 1, 3, 2];
// nums.sort((a, b) => a - b);

// function longestConsecutive(nums) {
//     let set = new Set(nums);
//     let longest = 0;
//     for (let i = 0; i < nums.length; i++){
//         if (set.has(nums[i] + 1)) {
//             let count = 1;

//             while (set.has(nums[i] + count)) {
//                 count++;
//             };

//             longest = Math.max(longest, count);
//         };
//     };

//     return longest;
// };

// console.log(longestConsecutive(nums));








