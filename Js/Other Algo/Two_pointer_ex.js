function isZero(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    sum = arr[left] + arr[right];
    if( sum == 0){
      return [arr[left], arr[right]];
    }
    if(sum > 0){
      right--;
    }else{
      left++;
    }
  }
}

console.log(isZero([-6,-3,-2,0,1,3,5,7]))