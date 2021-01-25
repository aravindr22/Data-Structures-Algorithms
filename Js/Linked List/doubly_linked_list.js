// piece of data - val
// reference to next node - next
// reference to Prev node - prev

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Push is function it is used to add an new node at end of linked list
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    //Pop is used to remove the last Node from the list
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    //Shift Function is used to remove the first element from the list
    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    //unShift Function is used to add an element to the beginning of the list
    unShift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //Get Function is used to get the element at specified position
    get(pos){
        if(pos < 0 || pos >= this.length) return undefined;
        var currentNode, index;
        if(pos <= this.length/2){
            currentNode = this.head;
            index=0
            while(index != pos){
                currentNode = currentNode.next;
                index++;
            }
        } else {
            index = this.length - 1;
            currentNode = this.tail;
            while(index != pos){
                currentNode = currentNode.prev;
                index--;
            }
        }
        return currentNode;
    }

    //Set Function is used to change the value of node at specified position
    set(pos, value){
        var currentNode = this.get(pos);
        if(currentNode){
            currentNode.val = value;
            return true;
        }
        return false;
    }

    //Insert Function is used to add a node at specified position
    insert(pos, value){
        if(pos < 0 || pos > this.length) return undefined;
        if(pos === 0) return !!this.unShift(value);
        if(pos === this.length) return !!this.push(value);
        var newNode = new Node(value);
        var beforeNode = this.get(pos-1);
        var nextNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        newNode.prev = beforeNode;
        this.length++;
        return true;
    }

    //Remove Function is used to remove a node at specified position
    remove(pos){
        if(pos < 0 || pos >= this.length) return undefined;
        if(pos === 0) return this.shift();
        if(pos === this.length-1) return this.pop();
        var removedNode = this.get(pos);
        var prevNode = removedNode.prev;
        var nextNode = removedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removedNode.prev = removedNode.next = null;
        this.length--;
        return removedNode;
    }

    print(){
        var arr = []
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr)
    }
}

var list = new DoublyLinkedList();
list.push(5)
list.push(15)
list.push(150)
list.push(1500)
list.print()
console.log(list.remove(1))
list.print()
