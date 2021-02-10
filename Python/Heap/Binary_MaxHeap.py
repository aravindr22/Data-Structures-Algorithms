#---------------------------------Binary Heap Time Complexity------------------------------------
#  Insertion - O(logn)
#  Removal   - O(logn)
#  Searching - O(n)    

import math

class MaxBinaryHeap:
    def __init__(self):
        self.values = []
    
    def insert(self, val):
        self.values.append(val)
        self.BubbleUp()

    def BubbleUp(self):
        index = len(self.values) - 1
        element = self.values[index]
        while index > 0:
            parentIndex = math.floor(index/2);
            parentElement = self.values[parentIndex]
            if element <= parentElement:
                break
            self.values[parentIndex] = element
            self.values[index] = parentElement
            index = parentIndex
    
    def extractMax(self):
        max = self.values[0]
        end = self.values.pop()
        if len(self.values) > 1:
            self.values[0] = end
            self.bubbleDown()
        return max


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
                if leftChild > element:
                    swap = leftIndex
            
            if rightIndex < length:
                rightChild = self.values[rightIndex]
                if (swap == None and rightChild > element) or (swap != None and rightChild > leftChild):
                    swap = rightIndex
            
            if swap == None:
                break

            self.values[index] = self.values[swap]
            self.values[swap] = element
            index = swap 

heap = MaxBinaryHeap()
print(heap.insert(41))
print(heap.insert(39))
print(heap.insert(33))
print(heap.insert(18))
print(heap.insert(27))
print(heap.insert(12))
print(heap.values)
print(heap.extractMax())
print(heap.values)
print(heap.extractMax())
print(heap.values)