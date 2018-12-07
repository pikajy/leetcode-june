/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var resStr = ""
    if(strs.length){
        // sort -> find the shortest word
        strs.sort(function (a, b) {
            return a.length-b.length;
        }); 
        for(let i = 1; i <= strs[0].length;i++){
            //define prefix
            let prefix = strs[0].slice(0,i);
            //filter not-included word
            let arr = strs.filter(e=>e.indexOf(prefix)!=0)
            //judge emptiness
            if(arr.length==0){
                resStr = prefix;
            }else{
                break;
            }
        }
    }
    return resStr
};