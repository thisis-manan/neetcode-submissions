class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = "";
        for (let i = 0; i < s.length; i++) {
            if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
                stack =stack+(s[i]);
            } else if (
                (s[i] === ")" && stack[stack.length - 1] === "(") ||
                (s[i] === "]" && stack[stack.length - 1] === "[") ||
                (s[i] === "}" && stack[stack.length - 1] === "{")
            ) {
                stack = stack.slice(0, -1);
            }
            else{
                return false
            }
        } if(stack===""){return true}
        else{
            return false
        }
    }
}
