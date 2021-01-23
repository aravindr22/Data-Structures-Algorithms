//---------------------------------Single Linked List Time Complexity------------------------------------
//  Insertion - O(1)
//  Removal   - Best Case  - O(1)
//              Worst Case - O(n)
//  Searching - O(n)
//  Access    - O(n)  


// piece of data - val
// reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Push is function it is used to add an new node at end of linked list
    push(val){
        var newNode = new Node(val);                    //New node created using new value
        if(!this.head){
            this.head = this.tail = newNode;            //If head is empty and tail are empty the new node is inserted here
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;                 //OR else new value is attached to tail and new tail is assigned
        }
        this.length++;
        return this;
    }

    //Pop is used to remove the last Node from the list
    pop(){
        if(!this.head) return undefined;                //If List is empty undefined is returned
        var current = this.head;
        var previous = current
        while(current.next){
            previous = current
            current = current.next;
        }
        this.tail = previous
        previous.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = this.tail = null;
        }
        return current;
    }

    //Shift Function is used to remove the first element from the list
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        } 
        return currentHead;
    }

    //unShift Function is used to add an element to the beginning of the list
    unshift(val){
        var newNode = new Node(val);                        //New node created using new value
        if(!this.head){ 
            this.head = this.tail = newNode;                //If head is empty and tail are empty the new node is inserted here   
        } else {
            newNode.next = this.head;                       //OR else new value is attached to tail and new tail is assigned
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //Get Function is used to get the element at specified position
    get(pos){
        if(pos < 0 || pos >= this.length) return undefined;
        var current = this.head;
        var counter = 0;
        while(counter !== pos){
            current = current.next;
            counter++;
        }
        return current;
    }

    //Set Function is used to change the value of node at specified position
    set(pos, value){
        var foundNode = this.get(pos);                      //Get Function is used find the node at specified position
        if(foundNode){
            foundNode.val = value;
            return true;
        }
        return false;
    }

    //Insert Function is used to add a node at specified position
    insert(pos, value){
        if(pos < 0 || pos > this.length ) return false;
        if(pos === 0)   return !!this.unshift(value);                       //If the positon is at beginning unshift is called
        if(pos === this.length)    return !!this.push(value);               //If the positon is at end Push is called
        var newNode = new Node(value);
        var currentNode = this.get(pos-1);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;  
        return true;
    }

    //Remove Function is used to remove a node at specified position
    remove(pos){
        if(pos < 0 || pos >= this.length ) return undefined;
        if(pos === 0 ) return this.shift();
        if(pos === this.length-1 ) return this.pop();
        var prevNode = this.get(pos-1);
        var removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    //Reverse is a function used to reverse a linked list
    reverse(){
        if(this.length === 0) return null;
        var currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        var prevNode = null;
        var nextNode;
        while(currentNode){
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        };
        return this
    }
    //Used to print all the functions in the list
    print(){
        var arr = [];
        var currentNode = this.head;
        while(currentNode){
            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }
        console.log(arr)
    }
}

var list = new SinglyLinkedList()
list.push("hi")
list.push("there")
list.push("Hello")
list.push("Heo")
list.print()
console.log(list.reverse())
list.print()