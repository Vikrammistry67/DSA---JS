// ------------------------------------------------------------------- OOPS ----------------------------------------------------------------
function Student() { };

function User(username, age, isLoggedIn) {
    this.username = username;
    this.age = age;
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        return `Hello ${this.username}`;
    }
    return this;
};



let userOne = new User('Vikram Mistry', 23, true);
let userTwo = new User('Kuhu Sharma', 24, false);
let userThree = new Student();
// console.log(userOne.greeting());
// console.log(userTwo.greeting());

// console.log(userOne instanceof User);
// console.log(userThree instanceof User);

// console.log(userThree instanceof User);
// console.log(userThree instanceof Object);


// console.log(userOne.greeting() instanceof User);
console.log(userOne.username instanceof User);