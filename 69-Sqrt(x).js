/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x==1) return 1;
    var low = 0,high = parseInt(x/2);
    //binary search
    while(low <= high){
        var mid = parseInt((high + low) / 2);
        if(x == mid*mid){
            return  mid;
        }else if(x > mid*mid){
            low = mid + 1;
        }else if(x < mid*mid){
            high = mid -1;
        }
    }
    return high
};