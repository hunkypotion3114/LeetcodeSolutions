var containsDuplicate = function(nums) {
    for(i=0; i< nums.length ; i++){
        termToCompare = nums[i]
        if(i < nums.length -1){
           listToCompareWith = nums.slice(i+1)
            if(listToCompareWith.includes(termToCompare)){
                return true
            }
        }
        else{
            return false
        }
    }
};