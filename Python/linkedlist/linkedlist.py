class Node():
    def __init__(self, data=None):
        self.data = data
        self.next = None

class LinkedList():
    def __init__(self):
        self.head = Node()

    def append(self, data):
        new_node = Node(data)
        curr = self.head
        while curr.next != None:
            curr = curr.next
        curr.next = new_node
    
    def display(self):
        lis = []
        curr = self.head
        while curr.next != None:
            temp = curr.next
            lis.append(temp.data)
            curr = curr.next
        
        print(lis)

    def length(self):
        val = 0
        curr = self.head
        while curr.next != None:
            val +=1
            curr = curr.next
        
        return val

    def get(self, index):
        if index >= self.length():
            print("Null")
        
        else:
            pos = 0
            curr = self.head
            while curr.next != None:
                temp =curr.next
                if pos == index:
                    print(temp.data)
                pos += 1
                curr = curr.next
    
    def delete(self,index):
        curr = self.head
        pos = 0
        while True:
            prev = curr
            curr = curr.next
            if pos == index:
                prev.next = curr.next
                break
            pos += 1


ll = LinkedList()

ll.append(1)
ll.append(2)
ll.append(3)
ll.append(6)
ll.append(4)
ll.append(2)

ll.display()

ll.delete(2)
ll.display()

ll.delete(4)
ll.display()