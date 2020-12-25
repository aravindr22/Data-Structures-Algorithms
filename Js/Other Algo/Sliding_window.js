function maxSumSubarray(arr,num){
  var maxSum = 0;
  var tempSum = 0;
  if(arr.length < num) return null;
  for(let i=0;i<num;i++){
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for(let i=num;i<arr.length;i++){
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(tempSum,maxSum);
  }
  return maxSum;
}

console.log(maxSumSubarray([2,3,4,6,5,1,6,2],3))