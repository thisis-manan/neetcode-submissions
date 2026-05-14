class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unums= new Set(nums);
        if (nums.length!== unums.size){
            return true;
        }
        else{
            return false
        }
    }
}
