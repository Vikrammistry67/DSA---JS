// let User = {
//     username: 'Vikram',
//     age: 24,

//     address: {
//         state: 'karnataka',
//         city: 'Bengaluru'
//     },
// };


// let copyUser = { ...User };
// let deepCopyUser = structuredClone(User);
// // copyUser.username = 'Vikku';
// // copyUser.address.city = 'Bhopal';

// // console.log('------------------------------');
// // console.log(User.username);
// // console.log(User.address.city);
// // console.log('------------------------------');

// deepCopyUser.username = 'Shona';
// deepCopyUser.address.city = 'Kolkata';

// console.log('------------------------------');

// console.log(User.username);
// console.log(User.address.city);















// -----------------------------------------------------------  for Array -------------------------------------------------------------------
// Shallow copy ?

let User = [
    {
        username: 'Akash Sahu',
        age: 23,
        gmail: 'a@gmail.com',
        address: {
            city: 'Bengaluru',
            state: 'karnataka',
            country: 'India'
        },
    },

    loggedInDays = ['Monday', 'Friday', 'Saturday']
];


let shallowCopyUser = [...User];

shallowCopyUser[0].username = 'Nitaii';

console.log(User[0].username);