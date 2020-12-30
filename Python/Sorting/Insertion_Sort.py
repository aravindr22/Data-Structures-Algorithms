#------------Insertion Sort complexity----------------
# Best Case - O(n)             |--> If the array is nearly sorted
# Average Case - O(n^2)
# Worst Case - O(n^2)

# Space Complexity - O(1)

def insertion_Sort(array):
    # Traverse through 1 to len(arr) 
    for i in range(1, len(array)): 
  
        #storing the key value to find the position in array
        key = array[i] 
  
        # Move elements of arr[0..i-1], that are 
        # greater than key, to one position ahead 
        # of their current position 
        j = i-1
        while j >= 0 and key < array[j] : 
                array[j + 1] = array[j] 
                j -= 1
        array[j + 1] = key
        #To see the partial sorted array after every pass remove the comment of below code
        #print(array)
    
    return array

print(insertion_Sort([6,2,4,1,8,5]))

# Step 1: [ 2, 6, 4, 1, 8, 5 ]     currentVal=6
# Step 2: [ 2, 4, 6, 1, 8, 5 ]     currentVal=4
# Step 3: [ 1, 2, 4, 6, 8, 5 ]     currentVal=1
# Step 4: [ 1, 2, 4, 6, 8, 5 ]     currentVal=8
# Step 5: [ 1, 2, 4, 5, 6, 8 ]     currentVal=5
# Step 6: [ 1, 2, 4, 5, 6, 8 ]