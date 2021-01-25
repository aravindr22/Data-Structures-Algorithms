#---------------------------------Single Linked List Time Complexity------------------------------------
#  Insertion - O(1)
#  Removal   - Best Case  - O(1)
#              Worst Case - O(n)
#  Searching - O(n)
#  Access    - O(n)


# piece of data - val
# reference to next node - next

class Node():
    def __init__(self,val):
        self.val = val
        self.next = None

class singlyLinkedList():
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
    
    #Push is function it is used to add an new node at end of linked list
    def push(self, val):
        newNode = Node(val)                                 #New node created using new value
        if(not self.head):
            self.head = self.tail = newNode                 #If head is empty and tail are empty the new node is inserted here
        else:
            self.tail.next = newNode                        #OR else new value is attached to tail and new tail is assigned
            self.tail = newNode
        self.length += 1
        return self
    
    #Pop is used to remove the last Node from the list
    def pop(self):
        if(not self.head):
            return None
        current = previous = self.head
        while(current.next):
            previous = current
            current = current.next
        previous.next = None
        self.tail = previous
        self.length -= 1
        return current

    #Shift Function is used to remove the first element from the list
    def shift(self):
        if not self.head:
            return None
        current = self.head
        self.head = self.head.next
        self.length -= 1
        if self.length == 0:
            self.tail = None        
        return current
    
    #unShift Function is used to add an element to the beginning of the list
    def unShift(self, val):
        newNode = Node(val)                                     #New node created using new value
        if not self.head:
            self.head = self.tail = newNode                     #If head is empty and tail are empty the new node is inserted here
        else:
            newNode.next = self.head                            #OR else new value is attached to tail and new tail is assigned
            self.head = newNode
        self.length += 1
        return self

    #Get Function is used to get the element at specified position
    def get(self, Pos):
        if Pos < 0 or Pos >= self.length:
            return None
        current = self.head
        index = 0
        while index < self.length and not(index == Pos):
            current = current.next
            index += 1
        return current
    
    #Set Function is used to change the value of node at specified position
    def set(self, Pos, value):
        currentNode = self.get(Pos)
        if currentNode:
            currentNode.val = value
            return True
        return False
            
    #Insert Function is used to a node at specified position
    def insert(self, Pos, value):
        if Pos < 0 or Pos > self.length:
            return False
        if Pos == 0:
            return not not self.unShift(value)
        if Pos == self.length:
            return not not self.push(value)
        prevNode = self.get(Pos-1)
        newNode = Node(value)
        newNode.next = prevNode.next
        prevNode.next = newNode
        self.length += 1
        return True
    
    #Remove Function is used to remove a node at specified position
    def remove(self, Pos):
        if Pos < 0 or Pos > self.length:
            return False
        if Pos == 0:
            return self.shift()
        if Pos == self.length-1:
            return self.pop()
        prevNode = self.get(Pos-1)
        nextNode = prevNode.next
        prevNode.next = nextNode.next
        self.length -= 1
        return nextNode

    #Reverse is a function used to reverse a linked list
    def reverse(self):
        if self.length == 0:
            return None
        currentNode = self.head
        self.head = self.tail
        self.tail = currentNode
        prevNode = None
        nextNode = None
        while currentNode:
            nextNode = currentNode.next
            currentNode.next = prevNode
            prevNode = currentNode
            currentNode = nextNode
        return self

    #Used to print all the functions in the list
    def printList(self):
        arr = []
        currentNode = self.head
        while currentNode:
            arr.append(currentNode.val)
            currentNode = currentNode.next
        print(arr)
            

    
list = singlyLinkedList()
print(list.push(5))
print(list.push(50))
print(list.push(500))
print(list.length)
list.printList()
list.reverse()
list.printList()