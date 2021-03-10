class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        l=m+n-1
        x1=m-1 
        x2=n-1
        while x1>=0 and x2>=0:
            if nums2[x2]>nums1[x1]:
                nums1[l]=nums2[x2]
                x2 -= 1
            else:
                nums1[l]=nums1[x1]
                x1 -= 1
            l -= 1
        while x2>=0:
            nums1[l]=nums2[x2]
            x2 -= 1
            l -= 1
        while x1>=0:
            nums1[l]=nums1[x1]
            x1 -= 1
            l -= 1
    
