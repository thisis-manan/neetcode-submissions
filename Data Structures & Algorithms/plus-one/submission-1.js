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
            } else {
                if (i == 0 && digits[i] == 9) {
                    digits[i]=0
                    digits.unshift(1);
                    break;
                }
                else {
                    digits[i]=0
                }
                
            }
        }
        return digits;
    }
}
