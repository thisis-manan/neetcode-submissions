class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let last = digits.length - 1;
        for (let i = last; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i] = digits[i]+1;
                return digits
            } 
            digits[i]=0
        }
        digits[0]=1
        digits.push(0)
        return digits
    }
}
