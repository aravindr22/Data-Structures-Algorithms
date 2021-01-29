class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None
    
    def insert(self, val):
        newNode = Node(val)
        if not self.root: 
            self.root = newNode
            return self
        current = self.root
        while True:
            if val == current.val:
                return None
            if val < current.val:
                if current.left == None:
                    current.left = newNode
                    return self
                current = current.left
            elif val > current.val:
                if current.right == None:
                    current.right = newNode
                    return self
                current = current.right

    def find(self, value):
        if not self.root:
            return None
        current, found = self.root, False
        while current and not found:
            if value < current.val:
                current = current.left
            elif value > current.val:
                current = current.right
            else:
                return current
        return False


BST = BinarySearchTree()
print(BST.insert(10).root.val)
print(BST.insert(5))
print(BST.insert(15))
print(BST.insert(1))
print(BST.find(5).val)
