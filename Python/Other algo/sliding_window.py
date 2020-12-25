def maxSUmSubarray(arr, num):
    maxSum = 0
    tempSum = 0
    if len(arr) < num:
        return None
    for i in range(0,num):
        tempSum += arr[i]
    maxSum = tempSum
    for i in range(num,len(arr)):
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = max(tempSum,maxSum)
    return maxSum

print(maxSUmSubarray([1,4,6,2,7,1,6],3))