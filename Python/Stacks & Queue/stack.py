#---------------------------------Stack Time Complexity------------------------------------
#  Insertion - O(1)
#  Removal   - O(1)
#  Searching - O(n)
#  Access    - O(n)

class Node():
    def __init__(self,val):
        self.val = val
        self.next = None

class Stack():
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0

    def push(self, val):
        newNode = Node(val)                                     #New node created using new value
        if not self.first:
            self.first = self.last = newNode                     #If head is empty and tail are empty the new node is inserted here
        else:
            newNode.next = self.first                            #OR else new value is attached to tail and new tail is assigned
            self.first = newNode
        self.size += 1
        return self.size

    def pop(self):
        if not self.first:
            return None
        current = self.first
        if self.first == self.last:
            self.last = None
        self.first = self.first.next
        self.size -= 1     
        return current.val

    def printList(self):
        arr = []
        currentNode = self.first
        while currentNode:
            arr.append(currentNode.val)
            currentNode = currentNode.next
        print(arr)

stack = Stack()
print(stack.push(5))
print(stack.push(55))
print(stack.push(555))
stack.printList()
print(stack.pop())