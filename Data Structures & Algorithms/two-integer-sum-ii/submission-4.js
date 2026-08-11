class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l=0
        let r=numbers.length-1

        while(l<r){
            let temp =numbers[l]+numbers[r]
            if(temp==target){
                return[l+1,r+1]
            }
            else if(temp<target){
                l++
            }
            else {
                r--
            }
        }
    }
}
