def binarySearch(arr,val):
    left, right = 0, len(arr)-1
    while left <= right:
        mid = (left + right)//2
        if arr[mid] == val:
            return mid + 1
        elif arr[mid] < val:
            left = mid + 1
        elif arr[mid] > val:
            right = mid - 1
    return -1

print(binarySearch([1,2,3,4,5,6,7,8,9],5))