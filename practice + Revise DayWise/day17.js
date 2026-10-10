// now today day 17 or practice we can definately crush this shit questions --------------------------------------------->


// 1 ----> Sort Colors -?

// let colors = [2, 0, 2, 1, 1, 0];
// console.log(colors);
// function sort(nums) {
//     let i = 0, j = 0, k = nums.length - 1;

//     while (i <= k) {
//         if (nums[i] == 0) {
//             let temp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = temp;
//             i++;
//             j++;
//         } else if (nums[i] == 2) {
//             let temp = nums[i];
//             nums[i] = nums[k];
//             nums[k] = temp;
//             k--;
//         } else i++;
//     };
// };

// sort(colors);
// console.log(colors);





// 2 --> Trapping Rain Water ( little bit Hard ) ?

// let heights = [4, 2, 0, 3, 2, 5];

// function trap(heights) {
//     let n = heights.length;
//     let left = new Array(n);
//     let right = new Array(n);

//     let maxLeft = heights[0];
//     let maxRight = heights[n - 1];

//     left[0] = heights[0];
//     right[n - 1] = heights[n - 1];


//     for (let i = 1; i < left.length; i++) {
//         maxLeft = Math.max(heights[i], maxLeft);
//         left[i] = maxLeft;
//     };

//     for (let i = right.length - 2; i >= 0; i--) {
//         maxRight = Math.max(heights[i], maxRight);
//         right[i] = maxRight
//     };


//     let ans = 0;
//     for (let i = 0; i < heights.length; i++) {
//         ans += Math.min(left[i], right[i]) - heights[i];
//     };

//     return ans;
// };


// console.log(trap(heights));









// --------------------------------------------------- Hashing ----------------------------------------------------

// 4 --> Intersection of two arrays ?

// let nums1 = [1, 2, 2, 1], nums2 = [2, 2];

// function intersection(nums1, nums2) {
//     let set = new Set(nums1);
//     let ans = [];

//     for (let i = 0; i < nums2.length; i++) {
//         if (set.has(nums2[i]) && !ans.includes(nums2[i])) ans.push(nums2[i]);
//     };

//     return ans;
// };


// console.log(intersection(nums1, nums2));
















// 5 --------> count of SubArray Sum equals to k ?

let nums = [10, 2, -2, -20, 10], k = -10;

function SubArray(nums, k) {
    let map = new Map();
    let count = 0, sum = 0;

    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        } else if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else map.set(sum, 1);
    };

    return count;
};

console.log(SubArray(nums, k));