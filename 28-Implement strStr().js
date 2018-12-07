/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var index = -1
    for(let i = 0; i <= haystack.length - needle.length; i++){
        if(haystack.slice(i, i + needle.length) == needle){
            index =  i;
            break;
        }
    }
    return index;
};