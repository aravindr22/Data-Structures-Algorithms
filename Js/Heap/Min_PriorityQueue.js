class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    };
};


class PriorityQueue{
    constructor(){
        this.values = [];
    };

    enqueue(val, priority){
        let newNode = new Node(val,priority);
        this.values.push(newNode);
        this.bubbleUp();
    };

    bubbleUp(){
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent
            index = parentIndex
        }        
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 1){
            this.values[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    bubbleDown(){
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let leftChild,rightChild;
            var swap = null;
            if(leftIndex < length){
                leftChild = this.values[leftIndex];
                if(leftChild.priority < element.priority){
                    swap = leftIndex;
                }
            }
            if(rightIndex < length){
                rightChild = this.values[rightIndex];
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightIndex;
                }
            }
            if(swap === null)   break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
};

let priorityQ = new PriorityQueue();
priorityQ.enqueue("common cold",5);
priorityQ.enqueue("gunshot wound",1);
priorityQ.enqueue("high fever",4);
priorityQ.enqueue("fracture",2);
priorityQ.enqueue("swell",3);
console.log(priorityQ.values);
priorityQ.dequeue();
console.log(priorityQ.values);