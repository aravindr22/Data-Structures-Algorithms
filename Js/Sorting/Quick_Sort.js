//------------Merge Sort complexity----------------
// Best Case - O(nlogn)
// Average Case - O(nlogn)
// Worst Case - O(n^2)

// Space Complexity - O(logn)


//Two swap two elements in an array 
function swap(array,i,j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

//To find the pivot index
function pivot(array, start=0, end=array.length-1){
    let pivot = array[start];
    let swapIndex = start;

    for(let i=start+1; i<=end; i++){
        if(pivot > array[i]){
            swapIndex++;
            swap(array,swapIndex,i);
        }
    }
    swap(array,start,swapIndex)
    return swapIndex;
};


//Quick sort main function  
function quickSort(array, left = 0, right = array.length-1){
    if(left < right){
        let pivotIndex = pivot(array,left,right);
        quickSort(array,left,pivotIndex-1);
        quickSort(array,pivotIndex+1,right);
    }
    return array;
}


console.log(quickSort([4,1,6,8,2,5,3,9]));