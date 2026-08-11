class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let max = 0;
        while (l < r) {
            let temp = (r - l) * Math.min(heights[l], heights[r]);
            if(temp>max){
                max=temp
            }
            else if(heights[l]>=heights[r]){
                r--
            }
            else{
                l++
            }
        }return max
    }
}
