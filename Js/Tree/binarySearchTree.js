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
}

var tree = new BinarySearchTree()
console.log(tree.insert(10))
console.log(tree.insert(5))
console.log(tree.insert(15))
console.log(tree.insert(25))
console.log(tree.insert(11))
console.log(tree.find(25))
console.log(tree.find(15))