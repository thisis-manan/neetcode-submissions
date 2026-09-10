class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        l,r=0,0
        res=0
        count={}

        while l<=r and r<len(s):
            count[s[r]]=1+count.get(s[r],0)
            windowSize= r-l+1
            if windowSize - max(count.values())<=k:
                res= max(res,windowSize)
            else:
                count[s[l]]=count[s[l]]-1
                l+=1
            r+=1

        return res
