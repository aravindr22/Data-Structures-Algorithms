#---------------------------------Single Linked List Time Complexity------------------------------------
#  Insertion - O(1)
#  Removal   - O(1)
#  Searching - O(n)    Technically it is O(n/2) but still we consider as O(n)
#  Access    - O(n)


# piece of data - val
# reference to next node - next
# reference to Prev node - prev

class Node:
    def __init__(self,val):
        self.val = val
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
    
    #Push is function it is used to add an new node at end of linked list
    def Push(self,val):
        newNode = Node(val)
        if not self.head:
            self.head = self.tail = newNode
        else:
            self.tail.next = newNode
            newNode.prev = self.tail
            self.tail = newNode
        self.length += 1
        return self
    
    #Pop is used to remove the last Node from the list
    def pop(self):
        if not self.head:
            return None
        poppedNode = self.tail
        if self.length == 1:
            self.head = self.tail = None
        else:
            self.tail = poppedNode.prev
            self.tail.next = None
            poppedNode.prev = None
        self.length -= 1
        return poppedNode

    #Shift Function is used to remove the first element from the list
    def shift(self):
        if not self.head:
            return None
        oldHead = self.head
        if self.length == 1:
            self.head = self.tail = None
        else:
            self.head = oldHead.next
            self.head.prev = None
            oldHead.next = None
        self.length -= 1
        return oldHead

    #unShift Function is used to add an element to the beginning of the list
    def unShift(self, val):
        newNode = Node(val)
        if not self.head:
            self.head = self.tail = newNode
        else:
            newNode.next = self.head
            self.head.prev = newNode
            self.head = newNode
        self.length += 1
        return self

    #Get Function is used to get the element at specified position
    def get(self, pos):
        if pos < 0 or pos >= self.length:
            return None
        currentNode, count = None, 0
        if pos <= self.length:
            currentNode = self.head
            count = 0
            while not (pos == count):
                currentNode = currentNode.next
                count += 1
        else:
            currentNode = self.tail
            count = self.length-1
            while not (pos == count):
                currentNode = currentNode.prev
                count -= 1
        return currentNode

    #Set Function is used to change the value of node at specified position
    def Set(self, pos, value):
        currentNode = self.get(pos)
        if currentNode:
            currentNode.val = value
            return True
        return False

    #Insert Function is used to a node at specified position
    def insert(self, pos, value):
        if pos < 0 or pos > self.length:
            return None
        if pos == 0:
            return not not self.unShift(value)
        if pos == self.length:
            return not not self.Push(value)
        newNode = Node(value)
        beforeNode = self.get(pos-1)
        afterNode = beforeNode.next
        beforeNode.next = newNode
        afterNode.prev = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        self.length += 1
        return True

    #Remove Function is used to remove a node at specified position
    def remove(self, pos):
        if pos < 0 or pos >= self.length:
            return None
        if pos == 0:
            return self.shift()
        if pos == self.length-1:
            return self.pop()
        currentNode = self.get(pos)
        beforeNode = currentNode.prev
        nextNode = currentNode.next
        beforeNode.next = nextNode
        nextNode.prev = beforeNode
        currentNode.next = currentNode.prev = None
        self.length -= 1
        return currentNode

    def printList(self):
        arr = []
        current = self.head
        while(current):
            arr.append(current.val)
            current = current.next
        print(arr)

List = DoublyLinkedList()
print(List.Push(5))
print(List.Push(50))
print(List.Push(500))
print(List.Push(5000))
List.printList()
print(List.remove(2).val)
List.printList()
