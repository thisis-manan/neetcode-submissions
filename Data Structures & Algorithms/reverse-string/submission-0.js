class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let l=0
        let r=s.length-1
        let temp
        while(l<r){
            s[temp]=s[l]
            s[l]=s[r]
            s[r]=s[temp]
            l++
            r--
        }
    }
}
