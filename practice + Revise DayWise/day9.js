// 1 --> Trapping Rain Water ?
// let heights = [4, 2, 0, 3, 2, 5];

// function trap(heights) {
//     let n = heights.length;
//     let left = new Array(n);
//     let right = new Array(n);

//     let maxLeft = heights[0], maxRight = heights[n - 1];
//     left[0] = heights[0], right[n - 1] = heights[n - 1];

//     for (let i = 1; i < left.length; i++) {
//         maxLeft = Math.max(maxLeft, heights[i]);
//         left[i] = maxLeft;
//     };

//     for (let i = right.length - 2; i >= 0; i--) {
//         maxRight = Math.max(maxRight, heights[i]);
//         right[i] = maxRight;
//     };

//     let ans = 0;

//     for (let i = 0; i < heights.length; i++) {
//         ans += ((Math.min(left[i], right[i])) - heights[i]);
//     };

//     return ans;

// };

// console.log(trap(heights));






// 2 --> Three Sum ?


let nums = [-1, 0, 1, 2, -1, -4];

function threeSum(nums) {

    let ans = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i != 0 && nums[i - 1] == nums[i]) continue;

        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum == 0) {
                let curr = [nums[i], nums[j++], nums[k--]];
                ans.push(curr.sort((a, b) => a - b));
                while (j < k && nums[j - 1] == nums[j]) j++;
                while (j < k && nums[k + 1] == nums[k]) k--;

            } else if (sum < 0) j++;
            else k--;
        };
    };

    return ans;
};

console.log(threeSum(nums));