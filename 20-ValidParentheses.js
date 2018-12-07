/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var flag = true;
    if(s.length){
        //个数为奇数一定不符合
        if(s.length%2==1){
            flag = false;
        }else{
            let ParenthesesArr = ['(','{','[',')','}',']'];
            let stack = [];
            stack.push(s[0]);
            for(let i = 1;i<s.length;i++){
                let top = stack[stack.length-1];//栈顶
                //判断是不是相应的符号，是出栈，不是入栈
                if(stack.length&&ParenthesesArr.indexOf(s[i])-ParenthesesArr.indexOf(top)==3){
                    stack.pop()
                }else{
                    stack.push(s[i])
                }
            } 
            //判断栈的长度
            if(stack.length){
                flag = false;
            }
        }
    }
    return flag
};