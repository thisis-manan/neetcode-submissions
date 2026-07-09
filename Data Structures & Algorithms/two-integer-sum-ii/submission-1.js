class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i=0 ; i<numbers.length;i++){
            for( let j= i+1; j<numbers.length; j++)
            if(target==numbers[i]+numbers[j]){
                return [i+1,j+1]
            }
        }
    }
}
