//------------Binary Search Time complexity----------------
// Best Case - O(1)
// Average Case - O(nlogn)
// Worst Case - O(nlogn)


function binarySearch(arr,val){

  //Left points the beginning of array and right points the end of array
  var left = 0;
  var right = arr.length - 1;

  //The while loops runs till left passes right
  while(left<=right){

    //after everloop the position of right or left changes.
    //According to that mid value must be calculated and changed
    var mid = Math.floor((left+right)/2);

    //If mid value of sub-array equal to  the searching value it returns the position
    if(arr[mid] == val){
      return mid+1;
    }

    //If the searching value less than the mid then the right pointer changes
    else if(val < arr[mid]){
      right = mid - 1;
    }

    //If the searching value greater than the mid then the left pointer changes
    else if(val > arr[mid]){
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1,4,6,8,12,45,76,123],45))