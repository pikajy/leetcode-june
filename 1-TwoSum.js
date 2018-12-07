/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const len = nums.length;
    let obj = {};
    for(let i = 0;i < len;i++){
        //target can not be twice as many as nums[i]
        if(obj[nums[i]]!==undefined && i!=obj[nums[i]]){
            return [i,obj[nums[i]]].sort((a,b)=>{return a - b})
        }
        //can not find opposite difference
        obj[target-nums[i]] = i
    }
};