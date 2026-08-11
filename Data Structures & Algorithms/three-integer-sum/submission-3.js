class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let ans = [];
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let j = i + 1;
            let k = nums.length - 1;
            while (j < k) {
                let temp = nums[i] + nums[j] + nums[k];
                if (temp == 0) {
                    ans.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while(j<k && nums[j]==nums[j-1]){
                        j++
                    } 
                } else if (temp < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }
        return ans;
    }
}
