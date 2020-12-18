function anagramCheck(arr1,arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  arr1_obj = {}
  arr2_obj = {}

  for(let val of arr1){
    arr1_obj[val] = (arr1_obj[val] || 0) + 1;
  }
  for(let val of arr2){
    arr2_obj[val] = (arr2_obj[val] || 0) + 1;
  }
  console.log(arr1_obj,arr2_obj)
  for(let key in arr1_obj){
    if(! (key**2 in arr2_obj)){
      return false;
    }
    if(arr2_obj[key**2] !== arr1_obj[key]){
      return false;
    }
  }
  return true;
}

console.log(check([1,2,3,3],[1,9,4,4]))
//console.log(check([1,2],[1,4]))
//console.log(check([1,2,1],[1,4,4]))