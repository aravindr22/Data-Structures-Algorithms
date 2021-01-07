//------------Merge Sort complexity----------------
// Best Case - O(nlogn)
// Average Case - O(nlogn)
// Worst Case - O(nlogn)

// Space Complexity - O(n)


//MErge Sort explanation (Divide & Conqueor method)
//                      [16,1,10,7]             |
//                      /         \             |   
//                   [16,1]       [10,7]        |-->        (Divide Method) (mergerSort() function is called recusievly)
//                   /    \       /    \        |           Where the array is broken to single pieces using recursion
//                 [16]   [1]   [10]   [7]      |-------------------------------------------------------------------------               
//                  \      /      \     /       |
//                   [1,16]        [7,10]       |
//                      \            /          |-->        (Conqueor method) (MergeTwoSortedArray() function is called to conqueor)
//                        [1,7,10,16]           |           Where the small chunks array are merged in sorted order 



//Time complexity of this function -> O(n + m)          Where n and m are kength of two arrays
function mergerTwoSortedArrays(array1, array2){         //The functionality of this function is to merge two sorted arrays
    let i=0;
    let j=0;
    let resultArr = [];

    while(i<array1.length && j<array2.length){          //Checks which element is greater and adds in resultArr 
        if(array1[i] < array2[j])
        {
            resultArr.push(array1[i])
            i++;
        }
        else{
            resultArr.push(array2[j])
            j++;
        }
    }
    while (i < array1.length) {
        resultArr.push(array1[i])
        i++;
    }
    while (j < array2.length) {
        resultArr.push(array2[j])
        j++;
    }
    return resultArr
}


//Main body of merge sort function
//Time complexity of this function is O(logn)
function mergeSort(array) {
    
    if(array.length <= 1) return array;             //if the length of the broken array is 1. Then the array returns with the value

    let mid = Math.floor(array.length/2);           //To find the middle position to break the array into two halves

    let left = mergeSort(array.slice(0,mid));       //Where the array is splitted into two halves left and right Again mergeSort function
    let right = mergeSort(array.slice(mid));        //is called with splitted array to break the array into further small chunks

    return mergerTwoSortedArrays(left,right);       //now the array is merged by conqueor method
}


console.log(mergeSort([2,26,19,12,34,3]))

