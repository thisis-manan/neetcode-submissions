class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        ans=[]
        x={"*","+","-","/"}
        for i in range (len(tokens)):
            if(tokens[i] not in x):
                ans.append(int(tokens[i]))
            else:
                b=ans.pop()
                a=ans.pop()
                if (tokens[i]=="*"):
                    c=a*b
                elif (tokens[i]=="-"):
                    c=a-b
                elif(tokens[i]=="+"):
                    c=a+b
                elif (tokens[i]=="/"):
                    c=int(a/b)
                ans.append(c)
        return ans[0]
                    
        