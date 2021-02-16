import math

class Node:
    def __init__(self, val, priority):
        self.val = val
        self.priority = priority

class MinBinaryHeap:
    def __init__(self):
        self.values = []

    def enqueue(self, val, priority):
        node = Node(val, priority)
        self.values.append(node)
        self.BubbleUp()
    
    def BubbleUp(self):
        index = len(self.values) - 1
        element = self.values[index]
        while index > 0:
            parentIndex = math.floor(index/2);
            parentElement = self.values[parentIndex]
            if element.priority >= parentElement.priority:
                break
            self.values[parentIndex] = element
            self.values[index] = parentElement
            index = parentIndex

    def deQueue(self):
        maxVal = self.values[0]
        end = self.values.pop()
        if len(self.values) > 1:
            self.values[0] = end
            self.bubbleDown()
        return maxVal.val
    
    def bubbleDown(self):
        index = 0
        length = len(self.values)
        element = self.values[0];
        while True:
            leftIndex = 2*index + 1
            rightIndex = 2*index + 2
            leftChild, rightChild = None, None
            swap = None
            if leftIndex < length:
                leftChild = self.values[leftIndex]
                if leftChild.priority < element.priority:
                    swap = leftIndex
            
            if rightIndex < length:
                rightChild = self.values[rightIndex]
                if (swap == None and rightChild.priority < element.priority) or (swap != None and rightChild.priority < leftChild.priority):
                    swap = rightIndex
            
            if swap == None:
                break

            self.values[index] = self.values[swap]
            self.values[swap] = element
            index = swap 

    def show(self):
        lis = []
        for i in self.values:
            lis.append(i.val)
        return lis

priorityQ = MinBinaryHeap()
priorityQ.enqueue("common cold",5);
priorityQ.enqueue("gunshot wound",1);
priorityQ.enqueue("high fever",4);
priorityQ.enqueue("fracture",2);
priorityQ.enqueue("swell",3);
print(priorityQ.show())
print(priorityQ.deQueue())
priorityQ.enqueue("swell",3);
print(priorityQ.show())