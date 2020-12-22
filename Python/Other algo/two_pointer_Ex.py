def isZero(arr):
    left = 0
    right = len(arr) - 1
    while(left < right):
        sum1 = arr[left] + arr[right]
        if sum1 == 0:
            return[arr[left], arr[right]]
        if sum1 < 0:
            left = left + 1
        else:
            right = right - 1
    return 0

print(isZero([-2,-1,0,2,4,5]))