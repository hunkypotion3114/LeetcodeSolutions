var findDisappearedNumbers = function(nums) {
    missingNums = []
    for(i=1 ; i <= nums.length ; i++){
        if(!nums.includes(i)){
            missingNums.push(i)
        }
    }
    return missingNums.sort()
};