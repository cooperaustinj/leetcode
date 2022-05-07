/*
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    

    Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"

    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if(strs.length === 0) return '';

    let prefix = '';
    let cont = true;
    let index = 0;
    while(cont) {
        let letter = strs[0].charAt(index);
        if(!letter) {
            cont = false;
        }
        let hasPrefix = true;
        for(let i = 0; i < strs.length; ++i) {
            if(!strs[i]) hasPrefix = false;
            hasPrefix &&= strs[i].charAt(index) === letter;
        }
        if(hasPrefix) prefix += letter;
        else cont = false;
        ++index;
    }
    return prefix;
};

console.assert("fl" === longestCommonPrefix(["flower","flow","flight"]));
console.assert("" === longestCommonPrefix(["dog","racecar","car"]));
console.assert("c" === longestCommonPrefix(["cir","car"]));

// console.log(longestCommonPrefix(["cir","car"]));