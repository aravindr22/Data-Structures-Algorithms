#------------Binary Search Time complexity----------------
# Best Case - O(1)
# Average Case - O(nlogn)
# Worst Case - O(nlogn)


def binarySearch(arr,val):

    #Left points the beginning of array and right points the end of array
    left, right = 0, len(arr)-1

    #The while loops runs till left passes right
    while left <= right:

        #after everloop the position of right or left changes.
        #According to that mid value must be calculated and changed
        mid = (left + right)//2

        #If mid value of sub-array equal to  the searching value it returns the position
        if arr[mid] == val:
            return mid + 1
        
        #If the searching value less than the mid then the right pointer changes
        elif arr[mid] < val:
            left = mid + 1

        #If the searching value greater than the mid then the left pointer changes
        elif arr[mid] > val:
            right = mid - 1
    return -1

print(binarySearch([1,2,3,4,5,6,7,8,9],5))