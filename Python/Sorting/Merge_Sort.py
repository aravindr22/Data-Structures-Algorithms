#------------Merge Sort complexity----------------
# Best Case - O(nlogn)
# Average Case - O(nlogn)
# Worst Case - O(nlogn)

# Space Complexity - O(n)


#MErge Sort explanation (Divide & Conqueor method)
#                      [16,1,10,7]             |
#                      /         \             |   
#                   [16,1]       [10,7]        |-->        (Divide Method) (mergerSort() function is called recusievly)
#                   /    \       /    \        |           Where the array is broken to single pieces using recursion
#                 [16]   [1]   [10]   [7]      |-------------------------------------------------------------------------               
#                  \      /      \     /       |
#                   [1,16]        [7,10]       |
#                      \            /          |-->        (Conqueor method) (MergeTwoSortedArray() function is called to conqueor)
#                        [1,7,10,16]           |           Where the small chunks array are merged in sorted order 
#


import math

#Time complexity of this function -> O(n + m)          Where n and m are kength of two arrays
def mergeTwoSortedArrays(array1, array2):                   #The functionality of this function is to merge two sorted arrays
    i, j = 0, 0
    resultArr = []
    while( i < len(array1) and j < len(array2) ):           #Checks which element is greater and adds in resultArr 
        if array1[i] < array2[j]:
            resultArr.append(array1[i])
            i += 1
        else:
            resultArr.append(array2[j])
            j += 1
    
    while i < len(array1):
        resultArr.append(array1[i])
        i += 1
    while j < len(array2):
        resultArr.append(array2[j])
        j += 1
    
    return resultArr


#Main body of merge sort function
#Time complexity of this function is O(logn)
def mergeSort(array):
    
    if len(array) <= 1:                                 #if the length of the broken array is 1. Then the array returns with the value
        return array

    mid = math.floor(len(array)/2)                      #To find the middle position to break the array into two halves
    left = mergeSort(array[0:mid])                      #Where the array is splitted into two halves left and right Again mergeSort function
    right = mergeSort(array[mid:])                      #is called with splitted array to break the array into further small chunks

    return mergeTwoSortedArrays(left, right)            #now the array is merged by conqueor method

print(mergeSort([2,5,19,3,4,7,10]))