function countUniqueValues(arr){
  var i = 0;
  for(var j=1; j<arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j]
    }
    console.log(i,j)
  }
  //BEcause i is the index position in array so we increment by one to get the result
  return i+1
}

//console.log(countUniqueValues([]))
console.log(countUniqueValues([1,1,2,3,3,3,4]));