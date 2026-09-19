var solve = function (nums, ans, curr, isVisited, i) {
    if (i == nums.length) {
        ans.push([...curr]);
        return;
    };

    for (let j = 0; j < nums.length; j++) {
        if (!isVisited[j]) {
            isVisited[j] = true;
            curr.push(nums[j]);
            solve(nums, ans, curr, isVisited, i + 1);
            isVisited[j] = false;
            curr.pop();
        }
    }
}
var permute = function (nums) {
    let ans = [];
    let curr = [];
    let isVisited = new Array(nums.length).fill(false)
    solve(nums, ans, curr, isVisited, 0);
    return ans;
};


console.log(permute([1, 2, 3].sort((a,b) => a-b)))