# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        i=0
        head1=head
        head2=head
        while head1:
            head1=head1.next
            i+=1
        if i==n:
            return head.next
        i=i-n
        
        while i>1:
            head=head.next
            i-=1
        
        head.next=head.next.next
        return head2


        

        