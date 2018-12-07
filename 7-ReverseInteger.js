/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var res = 0;
    //reverse string
    var rev = (""+Math.abs(x)).split("").reverse().map(Number).join('')
    //judge interval
    if(rev<=Math.pow(2,31)-1&&rev>=-Math.pow(2,31)){
        //judge positive or negative
        res = x<0 ? -rev : rev      
    }
    return res;
};