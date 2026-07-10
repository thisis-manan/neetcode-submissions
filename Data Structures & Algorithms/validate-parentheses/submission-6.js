class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let a = "";
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
                a += s[i];
                continue;
            } else if (
                (a[a.length - 1] === "{" && s[i] === "}") ||
                (a[a.length - 1] === "[" && s[i] === "]") ||
                (a[a.length - 1] === "(" && s[i] === ")")
            ) {
                a = a.slice(0, -1);

                continue;
            } else {
                return false;
            }
        }
        if (a.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}
