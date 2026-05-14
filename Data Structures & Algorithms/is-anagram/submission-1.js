class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean} 
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        for(let i=0;i<s.length;i++){
            for(let j = 0; j<t.length;j++){
                if(s[i]===t[j]) {
                    t = t.replace(t[j], "");
                    break;
                }
            }
        }
        if(t.length==0){
            return true
        }
        else {
            return false
        }
    }
}
