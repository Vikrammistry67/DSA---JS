// let str = 'malayala';


// function checkPallindrome(str) {
//     let isPallindrome = true;
//     let i = 0, j = str.length - 1;
//     while (i < j) {
//         if (str[i] != str[j]) {
//             isPallindrome = false;
//             break;
//         };
//         i++;
//         j--;
//     };
//     return isPallindrome;
// };

// if (checkPallindrome(str)) console.log('Pallindrome');
// else console.log('not');





// function toggleChar() {
//     let char = 'abcDeFg';
//     let ans = '';
//     for (let i = 0; i < char.length; i++) {
//         let ch = char.charCodeAt(i);

//         if (ch >= 65 && ch <= 90) ans += String.fromCharCode(ch + 32);
//         else if (ch >= 97 && ch <= 122) ans += String.fromCharCode(ch - 32);

//     };
//     return ans;
// };

// console.log(toggleChar());






// let words = ['pay', 'attention', 'attire', 'practice', 'attend'];

// function checkPrifix(words) {
//     let pref = 'at';
//     let filtered = words.filter(word => word.includes(pref));
//     return filtered;
// };

// console.log(checkPrifix(words));