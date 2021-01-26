#---------------------------------Queue Time Complexity------------------------------------
#  Insertion - O(1)
#  Removal   - O(1)
#  Searching - O(n)
#  Access    - O(n)

class Node():
    def __init__(self,val):
        self.val = val
        self.next = None

class Queue():
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0
    
    def enqueue(self, val):
        newNode = Node(val)                                 #New node created using new value
        if(not self.first):
            self.first = self.last = newNode                 #If head is empty and tail are empty the new node is inserted here
        else:
            self.last.next = newNode                        #OR else new value is attached to tail and new tail is assigned
            self.last = newNode
        self.size += 1
        return self.size

    def dequeue(self):
        if not self.first:
            return None
        current = self.first
        if self.first == self.last:
            self.last = None
        self.first = self.first.next
        self.size -= 1     
        return current.val


queue = Queue()
print(queue.enqueue(5))
print(queue.enqueue(55))
print(queue.enqueue(555))
print(queue.dequeue())