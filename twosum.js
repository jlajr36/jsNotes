/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hashtable = new Map();
    for (var i = 0; i < nums.length; i++)
    {
        var comp = target - nums[i];
        if (hashtable.has(comp))
        {
            return [hashtable.get(comp), i];
        }
        hashtable.set(nums[i], i);
    }
    return [];
};
