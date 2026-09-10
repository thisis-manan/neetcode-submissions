class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        count = {}

        for i in range(len(s1)):
            count[s1[i]] = 1 + count.get(s1[i], 0)
        l = 0
        r = 0
        count2 = {}
        while l <= r and r < len(s2):
            count2[s2[r]] = 1 + count2.get(s2[r], 0)
            window = r - l + 1
            if window > len(s1):
                count2[s2[l]] = count2.get(s2[l], 0) - 1
                if count2[s2[l]] == 0:
                    del count2[s2[l]]
                l += 1

            if count == count2:
                return True

            r += 1
        return False
