class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const a = s.toLowerCase()
        const b = a.replace(/\s/g, "");
        const c= b.replace(/[^a-zA-Z0-9]/g, "")
        console.log(c)
        let d= c.split('').reverse().join('');
        if (d===c){
            return true
        }
        else {

            return false
        }

    }
}
