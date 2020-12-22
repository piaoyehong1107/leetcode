# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    i=0
    indess=[]
   while i< nums.length 
        if (nums[i]!= target*0.5  && nums.include?(target-nums[i]))
        indess1=i
        indess2=nums.index(target-nums[i])
        return indess.push(indess1,indess2) 
        elsif (nums[i]==target*0.5  && ((0..nums.size-1).select { |i| nums[i] == target*0.5}.size>1) )
        return (0..nums.size-1).select { |i| nums[i] == target*0.5 }
        end
    i+=1
   end
end
