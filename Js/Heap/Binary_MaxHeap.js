class MaxBinaryHeap{
    constructor(){
        this.values = [];
    };

    insert(val){
        this.values.push(val);
        this.bubbleUp();
    };

    bubbleUp(){
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent
            index = parentIndex
        }        
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 1){
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
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
                if(leftChild > element){
                    swap = leftIndex;
                }
            }
            if(rightIndex < length){
                rightChild = this.values[rightIndex];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);