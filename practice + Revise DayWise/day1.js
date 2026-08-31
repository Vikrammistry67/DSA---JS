// -------------------------------------- Advance Array -----------------------------------------------
// Q1 -- Three Sum ?

let nums = [-1, 0, 1, 2, -1, -4]; // Output: [[-1,-1,2],[-1,0,1]]

function threeSum(nums) {

    let ans = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i != 0 && nums[i - 1] == nums[i]) continue;

        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                let curr = [nums[i], nums[j++], nums[k--]];
                ans.push(curr);

                while (j < k && nums[j - 1] == nums[j]) j++;
                while (j < k && nums[k + 1] == nums[k]) k--;
            } else if (sum < 0) j++;
            else k--;
        };
    };

    return ans;
};

console.log(threeSum(nums));