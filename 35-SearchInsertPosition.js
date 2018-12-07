/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var low = 0,high = nums.length - 1;
    //binary search
    while(low <= high){
        var mid = parseInt((high + low) / 2);
        if(target == nums[mid]){
            return  mid;
        }else if(target > nums[mid]){
            low = mid + 1;
        }else if(target < nums[mid]){
            high = mid -1;
        }else{
            return -1;
        }
    }
    return low
};