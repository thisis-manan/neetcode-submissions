class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        maxr=len(matrix)
        maxc=len(matrix[0])
        l,r=0,maxc*maxr-1
        while(l<=r):
            mid=l+(r-l)//2
            row=mid//maxc
            col=mid%maxc
            if matrix[row][col]==target:
                return True
            elif matrix[row][col]>target:
                r=mid-1
            else:
                l=mid+1
        return False

        