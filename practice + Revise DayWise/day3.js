//                                                       <--- solve & practice previous questions of day 3 ---->
// Q1 --> Happy Number ? -- eg -> 19 is a happy number.

// let n = 19;
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

//         if (sum === 1) return true;
//         if (set.has(sum)) return false;
//         set.add(sum);
//         n = sum;
//     };

//     return true;
// };

// if (isHappy(n) == true) console.log('Yes');
// else console.log('No')








//  Q2 --> frequency of an string / letter / sentence / array of words ?

// let str = 'abcadabbacddef';

// function frequency(str) {
//     let map = new Map();
//     let highest = 0;
//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);

//         if (map.has(char)) {
//             map.set(char, map.get(char) + 1);
//             highest = Math.max(highest, map.get(char));
//         } else map.set(char, 1);
//     };

//     return highest;
// };

// console.log(frequency(str));

















// Q3 --> first duplicate character ?

// let str = 'abcadabbacddef';

// function frequency(str) {
//     let map = new Map();
//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);

//         if (map.has(char)) {
//             map.set(char, map.get(char) + 1);
//             if (map.get(char) > 0) return char.toString();
//         } else map.set(char, 1);
//     };

// };

// console.log(frequency(str));











//Q4 ---> sort people ?

// let names = ['akash', 'rahul', 'vikram'];
// let heights = [170, 165, 180];


// function sortPeople(names, heights) {
//     let map = new Map();
//     for (let i = 0; i < names.length; i++) {
//         map.set(heights[i], names[i]);
//     };

//     heights.sort((a, b) => a - b);
//     let ans = [];

//     for (let i = 0; i < heights.length; i++) {
//         ans[i] = map.get(heights[i]);
//     }

//     return ans;
// };

// console.log(sortPeople(names, heights));










// Q5 --> Two Sum ?

// Brute - Force ---->
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




// Optimised - way --->

// let nums = [11, 2, 15, 7], target = 9;

// function twoSum(nums, target) {
//     let map = new Map();
//     let ans = [-1, -1];

//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(target - nums[i])) {
//             ans[0] = i;
//             ans[1] = map.get(target - nums[i]);
//         } else map.set(nums[i], 1);
//     };

//     return ans;
// };

// console.log(twoSum(nums, target));










// ====================================================== Now from here next 5 Questions ========================================================
//Q6 ---> Count Subarrays having Sum K ?

// let nums = [9, 4, 20, 3, 10, 5], k = 33;

// function cntSubarrays(nums, k) {
//     let sum = 0, count = 0;
//     let map = new Map();
//     map.set(0, 1);
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];

//         if (map.has(sum - k)) {
//             count += map.get(sum - k)
//         } else if (map.has(sum)) {
//             map.set(sum, map.get(sum) + 1);
//         } else map.set(sum, 1);
//     };

//     return count;
// };

// console.log(cntSubarrays(nums, k));











//Q7 ----> Longest Subarray with Sum K ?

// let nums = [10, 5, 2, 7, 1, -10], k = 15;

// function longest(nums, k) {
//     let sum = 0, longest = 0;
//     let map = new Map();
//     map.set(0, -1);


//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         if (map.has(sum - k)) {
//             longest = Math.max(longest, (i - map.get(sum - k)));
//         };
//         if (!map.has(sum - k)) {
//             map.set(sum, i);
//         };
//     };

//     return longest
// };

// console.log(longest(nums, k));








// ----------------------------------------------- Now from Here start today practice -------------------------------------------------------------
// ---------------------------------------- Topic --> Recursion -------------------------------------------------------


// Q1 --->

// function print(n) {
//     if (n === 0) return;
//     print(n - 1);
//     console.log(n);
// };

// print(5);




// Q2 --> Sum of n - terms ?

// function sum(n) {
//     if (n == 1) return 1;
//     return n + sum(n - 1);
// };

// console.log(sum(5));






// Q3 ---> fibonacci Series ?
// function sum(n, first, second) {
//     if (n == 0) return;
//     let third = first + second;
//     process.stdout.write(third + ' ');
//     return sum(n - 1, second, third);
// };

// let first = 0, second = 1;
// process.stdout.write(first + ' ' + second + ' ');

// let n = 10;
// console.log(sum(n - 2, first, second));









// Sum of fibo - n - terms ?

// function fiboSum(n) {
//     if (n == 0) return 0;
//     if (n == 1) return 1;
//     return fiboSum(n - 1) + fiboSum(n - 2);
// };

// console.log(fiboSum(10));





// Q3 ---> Factorial ?
// function factorial(n) {
//     // your code
//     if (n == 1) return 1;
//     return n * factorial(n - 1);

// };

// console.log(factorial(5)); // 120







//Q4 --> print array elements using recursion ?



// let arr = [10, 20, 30, 40, 50];

// function printArray(arr, index) {
//     if (index == arr.length) return;
//     console.log(arr[index]);

//     printArray(arr, index + 1);
// };

// console.log(printArray(arr, 0));




//Q5 ---> Count down ?

// function countDown(n) {
//     if (n == 0) return;
//     console.log(n);
//     countDown(n - 1);
// };

// console.log(countDown(5));






// function sumOfDigits(n) {
//     if (n == 1) return 1;
//     let rem = n % 10;
//     return rem + sumOfDigits(Math.floor(n / 10));
// };

// console.log(sumOfDigits(12345));




// function reverse(n, rev) {
//     if (n == 0) return 0;
//     let rem = n % 10;
//     return reverse(Math.floor(n / 10), rem);
// };

// console.log(reverse(12345, 0));



function power(x, n) {
    // your code
    if (n == 1) return x;

    return x * power(x, n - 1); 
}

console.log(power(2, 5)); // 32