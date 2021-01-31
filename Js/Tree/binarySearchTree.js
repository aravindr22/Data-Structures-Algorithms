//--------------------------------------BST Time Complexity-----------------------------
//Insertion - O(logn)
//Searching - O(logn)

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        var newNode = new Node(val)
        if(!this.root){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(val === current.val) return undefined;
            if(val < current.val){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if(val > current.val) {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;                
            }
        }
    
    }

    find(value){
        if(this.root === null) return null;
        var current = this.root, found = false;
        while(current && !found){
            if(current.val > value){
                current = current.left;
            } else if(current.val < value){
                current = current.right;
            } else {
                found = true;
            }
        }
        return current;
    }

    //BFS - Breadth First Search
    BFS(){
        var node = this.root,
            queue = [],
            data = [];
        queue.push(node)
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    //DFS - Depth First Search (PreOrder method)
    DFS_preOrder(){
        var data = [];

        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data;
    }
    
    //DFS - Depth First Search (PostOrder method)
    DFS_postOrder(){
        var data = [];

        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.val);
        }
        traverse(this.root)
        return data;
    }
    
    //DFS - Depth First Search (InOrder method)
    DFS_inOrder(){
        var data = [];

        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.val);
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data;
    }
}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(20)
tree.insert(3)
tree.insert(8)
console.log(tree.DFS_inOrder())