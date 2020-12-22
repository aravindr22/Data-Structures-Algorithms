def checkUniqueValues(arr):
    i = 0
    for j in range(1,len(arr)):
        if arr[i] != arr[j]:
            i += 1
            arr[i] = arr[j]
        
    return i + 1

print(checkUniqueValues([1,1,2,3,3,3,4]))