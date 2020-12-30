//------------Insertion Sort complexity----------------
// Best Case - O(n)             |--> If the array is nearly sorted
// Average Case - O(n^2)
// Worst Case - O(n^2)


function insertion_sort(array){
    var i,j,currentVal,array_length = array.length;

    // Traverse through 1 to length of Array
    for(i=1;i<array_length;i++){

        //storing the key value to find the position in array
        currentVal = array[i];

        // Move elements of arr[0..i-1], that are 
        // greater than key, to one position ahead 
        // of their current position 
        for(j=i-1; j>=0 && array[j] > currentVal; j--){
            array[j+1] = array[j]
        }
        array[j+1] = currentVal;
        //To see the partial sorted array after every pass remove the comment of below code
        //console.log(array) 

    }
    return array
}

console.log(insertion_sort([6,2,4,1,8,5]));
console.log(insertion_sort(['z','r','t','a','c']));

// Step 1: [ 2, 6, 4, 1, 8, 5 ]     currentVal=6
// Step 2: [ 2, 4, 6, 1, 8, 5 ]     currentVal=4
// Step 3: [ 1, 2, 4, 6, 8, 5 ]     currentVal=1
// Step 4: [ 1, 2, 4, 6, 8, 5 ]     currentVal=8
// Step 5: [ 1, 2, 4, 5, 6, 8 ]     currentVal=5
// Step 6: [ 1, 2, 4, 5, 6, 8 ]