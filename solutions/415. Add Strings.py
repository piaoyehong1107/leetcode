class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        
        
        res = ''
        carry = 0
        
        n1, n2 = len(num1), len(num2)
        st1, st2 = n1-1, n2-1
        
        while st1 >= 0 or st2 >= 0:
            d1 = int(num1[st1]) if st1 >= 0 else 0
            d2 = int(num2[st2]) if st2 >= 0 else 0
            
            sm = d1 + d2 + carry
            carry = sm // 10
            
            res = str(sm % 10) + res
            
            st1 -= 1
            st2 -= 1
        
        if carry:
            res = str(carry) + res
        
        return res
            
            
