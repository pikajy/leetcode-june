/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanObj={
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    }
    var arr = s.split('');
    const len = arr.length;
    var result = 0;
    for(let i = 0;i < len-1; i++){
        let current = romanObj[arr[i]]
        let next = romanObj[arr[i+1]]
        //judge add or substract
        result += current >= next ? current : -current
    }
    //add the last number of the arr
    return result + romanObj[arr[len-1]]
};