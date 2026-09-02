// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ username: 'Vikram', email: 'v@gmail.com', password: '123' });
//         } else {
//             reject('Something went wrong');
//         };
//     }, 2000);
// });


// promiseOne
//     .then((user) => {
//         console.log('Promise is consumed');
//         console.log(user);
//         return user.username;
//     })
//     .then((username) => console.log(username))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('Promise is either resolved or rejected !'));





// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let users = false;
//         if (!users) {
//             resolve('Users fethched successfully');
//         } else {
//             reject('failed to fetch users');
//         }
//     }, 1000);
// })


// async function consumePromiseTwo() {
//     try {
//         let response = await promiseTwo();
//         console.log(response)
//     } catch (error) {
//         console.log(error);
//     }
// }


// // const users = Promise.resolve('users fetched');
// // const products = Promise.resolve('products fetched');
// // const orders = Promise.resolve('orders fetched');


// // const allData = await Promise.all([users, products, orders]);
// const allData = await Promise.all([promiseOne, promiseTwo]);

// console.log(allData)














const promiseThree = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let products = false;
        if (!products) {
            resolve('Products fetched successfully');
        } else {
            reject('failed to fetch products');
        }
    }, 1000);

});



// promised consuming way - 1 
promiseThree
    .then((products) => {
        console.log('Products consumed', products);
    })
    .catch((err) => console.log('ERROR : ', err))
    .finally(() => console.log('i dont care about resolve and reject i am always working !!'));



// promised consuming way - 2 -- ( async , await ).

async function consumeProducts() {
    try {
        const response = await promiseThree;
        console.log(response);
    } catch (error) {
        console.log(error);
    };
};

consumeProducts();
