/*
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.

    Example 1:

    Input: s = "()"
    Output: true

    Example 2:

    Input: s = "()[]{}"
    Output: true

    Example 3:

    Input: s = "(]"
    Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const stack = [];
    const MATCHES = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    const OPEN = Object.keys(MATCHES);
    const CLOSE = Object.values(MATCHES);
    for (let c of s) {
        if (OPEN.includes(c)) stack.push(c);
        else if (CLOSE.includes(c)) {
            if (MATCHES[stack.pop()] !== c) return false;
        }
    }
    return stack.length === 0;
};

console.assert(isValid('()[]{}') === true);
console.assert(isValid('()]{}') === false);
