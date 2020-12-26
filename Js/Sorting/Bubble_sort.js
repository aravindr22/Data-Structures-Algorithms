function bubbleSort(arr){
  
  var array_length = arr.length;
  for(let i=0; i<array_length; i++){

    //The minus i is added here because after each pass greatest element will sorted and placed at last
    //So there is no need of checking again so we eleminate out to minimize the time complexity
    for(let j=0; j<array_length - i- 1; j++){

      //If the first element is greater than seconde element then the swap process occurs
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }

    //To see the partial sorted array after every pass remove the comment of below code
    //console.log(arr);
  }
  return arr;
}

console.log(bubbleSort(['z','r','t','a','c']));
console.log(bubbleSort([5,2,7,9,1,3,0]));