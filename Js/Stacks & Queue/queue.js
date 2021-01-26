//---------------------------------Queue Time Complexity------------------------------------
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

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        var newNode = new Node(val);                    //New node created using new value
        if(!this.first){
            this.first = this.last = newNode;            //If head is empty and tail are empty the new node is inserted here
        } else {
            this.last.next = newNode;
            this.last = newNode;                         //OR else new value is attached to tail and new tail is assigned
        }        
        return ++this.size;
    }

    dequeue(){
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

var queue = new Queue();
queue.enqueue(5)
queue.enqueue(15)
console.log(queue)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue)