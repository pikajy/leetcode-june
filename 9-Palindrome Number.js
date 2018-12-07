/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var flag = false;
    //judge positive
    if(x>=0){
        //reverse string
        var reverse = (x+'').split('').reverse().join('');
        if(x==reverse){
            flag = true
        }
    }
    return flag
};