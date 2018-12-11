/**
 * @param {number} n
 * @return {number}
 * 斐波那契数列去除第一项
 */
var climbStairs = function(n) {
    var a = new Array();
    a[1] = 1;
    a[2] = 2;
    for(i = 3; i <= n;i++){
        a[i] = a[i-1] + a[i-2];
    }
    return a[n]
};