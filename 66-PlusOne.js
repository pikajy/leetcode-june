/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length;
    //judge is nine or not
    if(digits[len-1]!=9){
        digits[len-1]++;
    }else{
        for(let i = len-1;i >= 0;i--){
            if(digits[i]==9){
                digits[i]=0;
            }else{
                digits[i]++;
                break;
            }
        } 
        //special case
        if(digits[0]==0){
            digits.unshift(1)
        }
    }
    return digits
    
};