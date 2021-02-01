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

    #BFS - Breadth First Search
    def BFS(self):
        data = []
        queue = []
        node = self.root
        queue.append(node)

        while len(queue):
            node = queue.pop(0)
            data.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right) 
        
        return data

    #DFS - Depth First Search (PreOrder method)
    def DFS_preOrder(self):
        data = []

        def traverse(node):
            data.append(node.val)
            if node.left:
                traverse(node.left)
            if node.right:
                traverse(node.right)
        
        traverse(self.root)
        return data

    #DFS - Depth First Search (PostOrder method)
    def DFS_postOrder(self):
        data = []

        def traverse(node):
            if node.left:
                traverse(node.left)
            if node.right:
                traverse(node.right)
            data.append(node.val)
        
        traverse(self.root)
        return data

    #DFS - Depth First Search (InOrder method)
    def DFS_InOrder(self):
        data = []

        def traverse(node):
            if node.left:
                traverse(node.left)
            data.append(node.val)
            if node.right:
                traverse(node.right)
        
        traverse(self.root)
        return data

BST = BinarySearchTree()
BST.insert(10)
BST.insert(5)
BST.insert(15)
BST.insert(1)
BST.insert(3)
BST.insert(30)
print(BST.DFS_postOrder())
print(BST.DFS_InOrder())

