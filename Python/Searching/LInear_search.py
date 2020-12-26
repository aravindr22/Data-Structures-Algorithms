#------------Linear Search Time complexity----------------
# Best Case - O(1)
# Average Case - O(n)
# Worst Case - O(n)


def linear_search(array,val):
    
    #Looping through all elements in the array
    for i in range(0,len(array)):

        #Return the position if it is found in array
        if array[i] == val:
            return i + 1

    return -1

print(linear_search([13,17,12,3,34,1,7,23],1))