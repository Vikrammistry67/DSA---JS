//Q1 --> Remove Duplicates from an sorted array ?

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];


// function removeDuplicates(nums) {
//     let j = 1;
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] != nums[i + 1]) {
//             nums[j] = nums[i + 1];
//             j++;
//         };
//     };
//     return j;
// };
// ;

// console.log(removeDuplicates(nums));






//Q2 --> Majority ? [ Booyers Moore voting algo ]

// let nums = [2, 2, 1, 1, 1, 2, 2];

// function majorityElement(nums) {
//     let count = 0, max = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (count == 0) {
//             max = nums[i];
//             count = 1;

//         } else if (max != nums[i]) {
//             count--;
//         } else count++
//     };

//     return max;
// };

// console.log(majorityElement(nums));




//Q3 --> best time to buy stock to make profit ?

let prices = [7, 1, 5, 3, 6, 4];

function bestTimeToBuyStock(prices) {
    let minProfit = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {

        let currProfit = prices[i] - minProfit;

        maxProfit = Math.max(maxProfit, currProfit);

        if (prices[i] < minProfit) {
            minProfit = prices[i];
        }
    }

    return maxProfit;
}

console.log(bestTimeToBuyStock(prices));