// now today day 17 or practice we can definately crush this shit questions --------------------------------------------->


// 1 ----> Sort Colors -?

let colors = [2, 0, 2, 1, 1, 0];
console.log(colors);
function sort(nums) {
    let i = 0, j = 0, k = nums.length - 1;

    while (i <= k) {
        if (nums[i] == 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j++;
        } else if (nums[i] == 2) {
            let temp = nums[i];
            nums[i] = nums[k];
            nums[k] = temp;
            k--;
        } else i++;
    };
};

sort(colors);
console.log(colors);





// 2 --> Trapping Rain Water ( little bit Hard ) ?

