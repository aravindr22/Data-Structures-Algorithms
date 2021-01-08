#------------Quick Sort complexity----------------
# Best Case - O(nlogn)
# Average Case - O(nlogn)
# Worst Case - O(n^2)

# Space Complexity - O(logn)

def pivot(array, low , high):
    i = (low-1)         # index of smaller element 
    pivot = arr[high]     # pivot 
  
    for j in range(low, high): 
  
        # If current element is smaller than or 
        # equal to pivot 
        if arr[j] <= pivot: 
  
            # increment index of smaller element 
            i = i+1
            arr[i], arr[j] = arr[j], arr[i] 
  
    arr[i+1], arr[high] = arr[high], arr[i+1] 
    return (i+1)   

def quickSort(array, low, high):
    if len(arr) == 1: 
        return arr 
    if low < high: 
        pi = pivot(arr, low, high) 

        quickSort(arr, low, pi-1) 
        quickSort(arr, pi+1, high)
    
    return array

arr = [5,2,1,4,3,8,0]
print(quickSort(arr,0,len(arr)-1))