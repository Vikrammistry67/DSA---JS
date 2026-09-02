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





// let arr = [11, 2, 15, 7];
// let target = 9;

// let ans = [-1, -1];
// let map = new Map();

// for (let i = 0; i < arr.length; i++) {
//     if (map.has(target - arr[i])) {
//         ans[0] = i;
//         ans[1] = map.get(target - arr[i])
//     } else map.set(arr[i], i);
// };

// ans.sort((a, b) => a - b);

// console.log(ans)








// let a = 10, b = 15;
// console.log(a, b);
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log(a, b);













// let explicitBigInt = 98765432123456789987654323456789n;

// console.log(explicitBigInt);
// console.log(typeof explicitBigInt)



// let userId1 = Symbol('123');
// // let userId2 = Symbol('123');

// // console.log(typeof userId1 , typeof userId2)
// // console.log(userId1 === userId2);



// const User = {
//     username: 'Vikram Mistry',
//     age: 24,
//     ['userId1']: 101
// };


// console.log(typeof User['userId1'])
















// -------------------------------------- Functions -----------------------------------------------------

// function User(username, age, email = 'guest@gmail.com') {
//     console.log(username, age, email);
// };

// User('Vikram', 22,);








// IIFE -- ?
// let User = (function () {
//     let username = 'Vikku';
//     return {
//         setUsername: (username) => {
//             this.username = username;
//         },
//         getUser: () => { console.log('Hey ' + this.username) },

//     }
// })();


// User.setUsername('Vikram Mistry');
// User.getUser();






// function* numbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// };

// const gen = numbers();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

























// ------------------------------------------------- Strings ------------------------------------

// what ? --> string is collection of characters or we can say that string is a sequence of characters ?

let str = 'Vikram Mistry';
let num = 12;

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(num.toString());
// console.log(str.replace('i', 24));
// console.log(str.replaceAll('i', 24))
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));
// console.log(str.lastIndexOf('i'));
// console.log(str.includes('u'))
// console.log(str.length)
// console.log(str.slice(0, 2));
// console.log(str.slice(-1, 2));
// console.log(str.substring(0, 2));
// console.log(str.split('   '));
// console.log(String.fromCharCode(str.charCodeAt(0)))
// let str2 = 'java';

// console.log(str2.slice(-3))



// document.querySelector('button').onclick = function () {
//     console.log('clicked')
// }


document.querySelector('button')
    .addEventListener('click', (e) => {
        // console.log(e)
        console.log(e.preventDefault());
        // console.log(e.view.navigator.appCodeName);
        // console.log(e.view.navigator.appName);

    });