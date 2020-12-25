function subStringSearch(long,short){
  var count =0;
  var shortStringLength = short.length;
  //Looping through the longest string
  for(let i=0; i<=long.length - shortStringLength; i++){
    
    //Looping through the shortest sring
      for(let j=0; j<shortStringLength; j++){
        
        //If the ith element from longstring is not equal to jth element from the short string it breaks!!
        if(long[i+j] !== short[j]){
          break;
        }

        //if it completes full loop on short string then counter increments pone
        if(j === shortStringLength - 1){
          count++;
        }
      }
  }
  return count

}

console.log(subStringSearch("wamgoiomgkomgasdomg", "mg"));