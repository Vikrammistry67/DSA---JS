// let nums1 = [1, 3, 5];
// let nums2 = [7, 9, 10];

// function merge(nums1, nums2) {
//     let ans = new Array(nums1.length + nums2.length);
//     let i = 0, j = 0, k = 0;

//     while (i < nums1.length && j < nums2.length) {
//         if (nums1[i] < nums2[j]) {
//             ans[k++] = nums1[i++];
//         } else {
//             ans[k++] = nums2[j++];
//         }
//     }

//     while (i < nums1.length) {
//         ans[k++] = nums1[i++];
//     }

//     while (j < nums2.length) {
//         ans[k++] = nums2[j++];
//     }

//     return ans;
// }

// console.log(merge(nums1, nums2));







// let arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];

// function sort(arr) {
//     let i = 0, j = 1;
//     let count = 0
//     while (i < arr.length) {
//         if (arr[i] != arr[i + 1]) {
//             count++
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             j++;
//         };
//         i++;
//     };
//     return count;
// };


// console.log(sort(arr));
// console.log(arr)








// maximum subArray --- ?
// kadan's algorithm

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// function maximumSubArray(arr) {
//     let sum = 0, maxSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         maxSum = Math.max(sum, maxSum);
//         if (sum < 0) sum = 0;
//     };
//     return maxSum;
// };

// console.log(maximumSubArray(arr));





// let prices = [7, 6, 4, 3, 1];


// function stocks(prices) {
//     let minProfit = prices[0];
//     let currProfit = 0;
//     let maxProfit = 0;

//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < minProfit) minProfit = prices[i];
//         currProfit = prices[i] - minProfit;
//         maxProfit = Math.max(currProfit, maxProfit);
//     };

//     return maxProfit;
// };


// console.log(stocks(prices));










// ------------------------------------------------------------- Day - 4 ----------------------------------------------------------------
// Q1 --> Sort Colors [ 75 ] ?

// let nums = [0, 1, 1, 2, 2, 1, 1, 2, 0, 2, 1, 0, 1, 0];
// console.log('before --> ', nums);


// let i = 0, j = 0, k = nums.length - 1;
// while (i <= k) {
//     if (nums[i] == 0) {
//         let temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//         j++;
//         i++;
//     } else if (nums[i] === 2) {
//         let temp = nums[i];
//         nums[i] = nums[k];
//         nums[k] = temp;
//         k--;
//     } else i++;
// };

// console.log('after --> ', nums);







// Q2 --> Trapping Rain Water ?
// let height = [4, 2, 0, 3, 2, 5];

// function trap(height) {

//     let n = height.length;
//     let left = new Array(n);
//     let right = new Array(n);

//     let maxleft = height[0];
//     let maxRight = height[n - 1];

//     left[0] = maxleft;
//     right[n - 1] = maxRight;

//     for (let i = 1; i < left.length; i++) {
//         maxleft = Math.max(maxleft, height[i]);
//         left[i] = maxleft;
//     };


//     for (let i = right.length - 2; i >= 0; i--) {
//         maxRight = Math.max(maxRight, height[i]);
//         right[i] = maxRight;
//     };

//     let ans = 0;

//     for (let i = 0; i < height.length; i++) {
//         ans += Math.min(left[i], right[i]) - height[i];
//     };

//     return ans;
// };

// console.log(trap(height));















// ---------------------------------------------------------- Day - 5 ------------------------------------------------------------


// let names = ['Vikku', 'Rahul', 'Akash'];
// let heights = [170, 155, 167];


// function sort(names, heights) {
//     let map = new Map();

//     for (let i = 0; i < heights.length; i++) {
//         map.set(heights[i], names[i]);
//     };

//     heights.sort((a, b) => b - a);
//     let ans = new Array(heights.length);

//     for (let i = 0; i < heights.length; i++) {
//         ans[i] = map.get(heights[i]);
//     };

//     return ans;
// };

// console.log(sort(names, heights));





// Q2 - swap two variables without extra space ?
// let a = 5, b = 45;
// console.log('before --> ', a, b);

// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

// console.log('after --> ', a, b);



// Q2 --> even & odd ?
// let n = 1;

// console.log((n & 1) == 0 ? 'Even' : 'Odd');






// Q3 ---> Two Sum ?
// 





















