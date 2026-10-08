// ---------------------------------------------  Advance Array ----------------------------------------------------
//1 --> Majority Element ( Booyers moore voting algorithm ) ?
// let nums = [2, 2, 1, 1, 1, 2, 2];


// function majority(nums) {
//     let count = 0, ans = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (count == 0) {
//             ans = nums[i];
//             count = 1;
//         } else if (ans != nums[i]) count--;
//         else count++;
//     };
//     return ans;
// };

// console.log(majority(nums));







// Best Time to Buy and Sell Stock ?

// let prices = [7, 1, 5, 3, 6, 4];

// function maxProfit(prices) {
//     let minProfit = prices[0];
//     let maxProfit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < minProfit) {
//             minProfit = prices[i]
//         };
//         let currProfit = prices[i] - minProfit;
//         maxProfit = Math.max(currProfit, maxProfit);
//     };

//     return maxProfit;

// };


// console.log(maxProfit(prices));


















let prices = [7, 1, 5, 3, 6, 4];



function maxProfit(prices) {
    let minProfit = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minProfit) {
            minProfit = prices[i];
        };

        let currProfit = prices[i] - minProfit;
        maxProfit = Math.max(currProfit, maxProfit);
    };

    return maxProfit;
};

console.log(maxProfit(prices));


