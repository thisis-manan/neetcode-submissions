class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxl=0
        let maxr=0
        let l=0
        let r=height.length-1
        let ans=0
        let temp=0
        while(l<=r){
            if(maxl<=maxr){
                temp=maxl-height[l]
                maxl = Math.max(maxl,height[l]);
                if(temp>0){
                    ans=ans+temp
                }
                l++
            }
            else if(maxr<maxl){
                temp=maxr-height[r]
                maxr= Math.max(maxr,height[r]);
                if(temp>0){
                    ans=ans+temp
                }
                r--
            }
        }return ans
    }
}
