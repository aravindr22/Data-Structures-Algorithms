function binarySearch(arr,val){
  var left = 0;
  var right = arr.length - 1;
  while(left<=right){
    var mid = Math.floor((left+right)/2);
    if(arr[mid] == val){
      return mid+1;
    }
    else if(val < arr[mid]){
      right = mid - 1;
    }
    else if(val > arr[mid]){
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1,4,6,8,12,45,76,123],45))