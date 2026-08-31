// sum of n Terms -- >

// function sum(n) {
//     if (n == 1) return 1;
//     return n * sum(n - 1);

// };

// console.log(sum(6));


// fibonacci series --> ( i ) --> Iterative - way ?

// let n = 30;
// let first = 0, second = 1;
// process.stdout.write(first + " " + second + " ");

// for (let i = 0; i < n - 2; i++) {
//     let third = first + second;
//     process.stdout.write(third + " ");
//     first = second;
//     second = third;
// };


// function fibo(n, first, second) {
//     if (n == 0) return;
//     let third = first + second;
//     process.stdout.write(third + " ")
//     fibo(n - 1, second, third)
// };

// let n = 10;
// let first = 0, second = 1;
// process.stdout.write(first + " " + second + " ");
// console.log(fibo(n - 2, first, second))















// sum of digits --> 891 ==> (8+9+1) => 18

// function sumOfDigit(n) {
//     if (n == 0) return;
//     let sum = 0;
//     let rem = n % 10;
//     n = Math.floor(n / 10);

//     return sum += rem + sumOfDigit(n - 1);
// };


// console.log(sumOfDigit(891));






// GCD / HCF ?

// let a = 32, b = 20;

// function GCD(a, b) {
//     for (let i = Math.min(a, b); i >= 1; i--) {
//         if (a % i == 0 && b % i == 0) {
//             console.log(i);
//             break;
//         };
//     };
// };

// GCD(a, b);