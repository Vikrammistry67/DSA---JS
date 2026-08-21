// function checkPangram(str) {
//     let set = new Set();
//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);
//         set.add(char);
//     };

//     return set.size === 26;
// };

// console.log(checkPangram("thequickbrownfoxjumpsoverthelazydog"));


let set = new Set("thequickbrownfoxjumpsoverthelazydog");
for (let char of set) {
    process.stdout.write(char + "");

}