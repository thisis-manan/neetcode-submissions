class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set= new Set()
        let r=0
        let max=0

        for(let l=0; l<s.length;l++){
            while(set.has(s[l])){
                set.delete(s[r])
                r++
            }
            set.add(s[l])
            if(max<set.size){
                max=set.size
            }
        }return max
    }
}
