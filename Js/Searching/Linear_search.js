//------------Linear Search Time complexity----------------
// Best Case - O(1)
// Average Case - O(n)
// Worst Case - O(n)


function linear_Search(array,val){

    //Looping through all elements in the array
    for(let i=0;i<array.length;i++){

        //Return the position if it is found in array
        if(array[i] == val){
            return i+1;
        }
    }
    return -1;
}

console.log(linear_Search([1,4,16,8,5,22,45,76,123],45))