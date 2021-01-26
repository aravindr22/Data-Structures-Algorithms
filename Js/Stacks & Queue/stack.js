//---------------------------------Stack Time Complexity------------------------------------
//  Insertion - O(1)
//  Removal   - O(1)
//  Searching - O(n)
//  Access    - O(n)  

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //used to push an element to stack
    push(val){
        var newNode = new Node(val);                        //New node created using new value
        if(!this.first){ 
            this.first = this.last = newNode;                //If head is empty and tail are empty the new node is inserted here   
        } else {
            newNode.next = this.first;                       //OR else new value is attached to tail and new tail is assigned
            this.first = newNode;
        };
        return ++this.size;
    }

    //used to remove an element from top of the stack
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

var stack = new Stack();
console.log(stack.push(5))
console.log(stack.pop())
console.log(stack)

