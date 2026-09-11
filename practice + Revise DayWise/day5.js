// --------------------------------------------------------first revice previous questions ------------------------------------------------------
//Q1 --> Happy Number ?

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

//         if (sum == 1) return true;
//         else if (set.has(sum)) return false;
//         else set.add(sum);

//         n = sum;

//     };

// };


// isHappy(n) ? console.log('Happy Number') : console.log('Not a Happy Number')



//Q2 --> frequency of a character ?
// let str = 'shanayannnn';

// function frequency(str) {
//     let map = new Map();
//     let maxFreq = 0;
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);

//         if (map.has(char)) {
//             map.set(char, map.get(char) + 1);
//             if (map.has(char) >= count) {
//                 maxFreq = char;
//                 count++;
//             };
//         } else map.set(char, 1);
//     };

//     console.log(maxFreq, count)
//     return maxFreq;
// };

// console.log(frequency(str));







//Q3 ---> two Sum ?
// let arr = [11, 2, 15, 7];

// function twoSum(arr, target) {
//     let ans = [-1, -1];
//     let map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         if (map.has(target - arr[i])) {
//             ans[0] = i;
//             ans[1] = map.get(target - arr[i])
//         } else map.set(arr[i], i)
//     };

//     return ans
// };

// console.log(twoSum(arr, 9));










// ---------------------------------------------------- Recursion --------------------------------------------

//Q5 ---> print 5 - 1;

// function print(n) {
//     if (n == 0) return;
//     print(n - 1);
//     console.log(n);
// };

// console.log(print(5))


//Q6 --->  sum of digits ?
// function sumofDigit(n) {
//     if (n == 1) return 1;
//     return n + sumofDigit(n - 1);
// };

// console.log(sumofDigit(5))




//Q7 --> fibonacii series ?

// function fibonaci(n) {
//     if (n == 0) return 0;
//     if (n == 1) return 1;
//     return fibonaci(n - 1) + fibonaci(n - 2)
// };

// console.log(fibonaci(3));





