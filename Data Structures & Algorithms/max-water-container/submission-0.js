class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max=0
        let l=0
        let r=heights.length-1
        while(l!==r){
            let smallNum = Math.min(heights[l],heights[r]);
            let temp=((r-l)*smallNum)
            if(temp>max){
                max=temp
            }
            if(heights[l]>=heights[r]){
                r--
            }
            else{
                l++
            }
        }return max
    }
}
