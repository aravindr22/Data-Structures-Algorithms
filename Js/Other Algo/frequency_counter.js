//Frequency counter is also known as Hash map
//Hash map (or) Frequency counter is implemented using Dictionaries
//Anagram check is application of frequency counter
//Anagram Check is where we compare two words where it contains same no.of elements
//(i.e) school,chsolo is anagram where length and letters are same
//school,scloh is not an anagram because length and letters are not same

function anagramCheck(arr1,arr2){

  //Checks if length of both strings are same. If not return false
  if(arr1.length !== arr2.length){
    return false;
  }

  //Declaring dictionaries for 2 strings
  arr1_obj = {}
  arr2_obj = {}

  //Mapping each letter to dictionary
  //for example school is mapped as {'s': 1, 'c': 1, 'h': 1,'o': 2,'l': 1}
  for(let val of arr1){

    //THis line checks if the element is already present or not
    //If already present increase by 1
    //If not present creates a key initailize its value to 1
    arr1_obj[val] = (arr1_obj[val] || 0) + 1;
  }
  for(let val of arr2){
    arr2_obj[val] = (arr2_obj[val] || 0) + 1;
  }

  //To check the mapped strings uncomment the below line
  //console.log(arr1_obj,arr2_obj)
  for(let key in arr1_obj){
    
    //Checks if element in 1st string present in 2nd string
    if(!(key in arr2_obj)){
      return false;
    }

    //Checks if the no.of element in 1st string and no.of element in 2nd string are same
    if(arr1_obj[key] !== arr2_obj[key]){
      return false;
    }
  }
  return true;
}

console.log(anagramCheck("school","shoolc"))
