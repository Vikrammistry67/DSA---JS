// var user = 'Vikku';
// function scope() {

//     if (true) {
//         let username = 'Vikram Mistry';
//         console.log(user)
//     };

//     console.log(username)
// };

// scope();
// console.log(user)







// Two Sum -->
// let arr = [11, 2, 15, 7];
// let target = 9;
// function twoSum(arr, target) {
//     let ans = new Array();
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == target) {
//                 ans.push(i, j);
//                 break;
//             };
//         }
//     };
//     return ans;
// };

// let res = twoSum(arr, target);
// console.log(res);





let arr = [11, 2, 15, 7];
let target = 9;

let ans = [-1, -1];
let map = new Map();

for (let i = 0; i < arr.length; i++) {
    if (map.has(target - arr[i])) {
        ans[0] = i;
        ans[1] = map.get(target - arr[i])
    } else map.set(arr[i], i);
};

ans.sort((a, b) => a - b);

console.log(ans)








// let a = 10, b = 15;
// console.log(a, b);
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log(a, b);
