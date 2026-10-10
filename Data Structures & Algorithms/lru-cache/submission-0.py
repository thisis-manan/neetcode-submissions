class Node:
    def __init__(self,key,val):
        self.key=key
        self.val=val
        self.prev=None
        self.next=None

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity=capacity
        self.cache={}

        self.right=Node(0,0)
        self.left=Node(0,0)

        self.right.prev=self.left
        self.left.next=self.right
    
    def remove(self,node):
        nxt,prv=node.next,node.prev
        nxt.prev,prv.next=prv,nxt
    
    def insert(self,node):
        prv,nxt=self.right.prev,self.right
        prv.next=nxt.prev=node
        node.next,node.prev=nxt,prv
        

    def get(self, key: int) -> int:
        if key in self.cache:
            self.remove(self.cache[key])
            self.insert(self.cache[key])
            return  self.cache[key].val
        return -1
        

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])
        self.cache[key]=Node(key,value)
        self.insert(self.cache[key])
        if len(self.cache)>self.capacity:
            lru=self.left.next
            self.remove(lru)
            del self.cache[lru.key]