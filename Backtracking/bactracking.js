// ------------------------------------------- Today we are going to start Backtracking Algorithm ------------------------------------
// 1 --> Subsets ?

let nums = [1, 2, 3];

function solve(nums, ans, curr, i) {
    if (i == nums.length) {
        ans.push([...curr]);
        return;
    };

    //pick
    curr.push(nums[i]);
    solve(nums, ans, curr, i + 1);
    curr.pop();

    //not-pick
    solve(nums, ans, curr, i + 1);
};

function subset(nums) {
    let ans = [], curr = [];

    solve(nums, ans, curr, 0);
    return ans;
};

console.log(subset(nums));






// 2 --> subset-ii ( no duplicate subset) ?

function solve(nums, ans, curr, i) {
    if (i == nums.length) {
        ans.push([...curr]);
        return;
    };

    //pick
    curr.push(nums[i]);
    solve(nums, ans, curr, i + 1);
    curr.pop();


    //check duplicates
    while (i + 1 < nums.length && nums[i] == nums[i + 1]) i++;

    //not pick
    solve(nums, ans, curr, i + 1);


};

function subset(nums) {
    nums.sort((a, b) => a - b);
    let ans = [], curr = [];

    solve(nums, ans, curr, 0);
    return ans;
};

console.log(subset(nums));









// 3 ---> Power set ( GFG ) ?

let s = 'abc';


function solve(s, ans, curr, i) {
    if (i == s.length) {
        ans.push(curr.join(''));
        return;
    };

    //pick
    curr.push(s.charAt(i));
    solve(s, ans, curr, i + 1);
    curr.pop();

    //not-pick
    solve(s, ans, curr, i + 1);
}

function powerSet(s) {
    let ans = [], curr = [];

    solve(s, ans, curr, 0);
    return ans;
};


console.log(powerSet(s));