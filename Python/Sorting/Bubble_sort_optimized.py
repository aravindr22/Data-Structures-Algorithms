#--------------------Bubble Sort Optimized----------------------
#*****************************************************************************************
#-------------It is a optimal solution only if the array is partially sorted-----------------
#-------------------------Detailed Explanation is given below--------------------------
#*****************************************************************************************

#------------Bubble Sort Optimized complexity----------------
# Best Case - O(n)          |
# Average Case - O(nlogn)   |--> With a condition partially sorted  
# Worst Case - O(nlogn)     |

def Bubble_sort_optimized(array):
    
    array_length = len(array)
    for i in range(0,array_length):

        noSwap = True #Variable to check if swap occurs or not
        #The minus i is added here because after each pass greatest element will sorted and placed at last
        #So there is no need of checking again so we eleminate out to minimize the time complexity
        for j in range(0,array_length - i - 1):

            #If the first element is greater than seconde element then the swap process occurs
            if array[j] > array[j+1]:                
                #Swapping elements using python shorthand
                array[j+1], array[j] = array[j], array[j+1]
                noSwap = False
        
        #If swap doesn't occurs it means the array is sorted
        #The loop breaks here
        if noSwap: 
            break

        #To see the partial sorted array after every pass remove the comment of below code
        #print(array)

    return array 

print(Bubble_sort_optimized([11,5,2,1,7,8,9,10]))

  # In this above test case It is a partially sorted so the program wxecute as follows
  #Pass-0: [11,5,2,1,7,8,9,10] noSwap=true
  #Pass-1: [5,2,1,7,8,9,10,11] noSwap=false
  #Pass-2: [2,1,5,7,8,9,10,11] noSwap=false
  #Pass-3: [1,2,5,7,8,9,10,11] noSwap=false
  #Pass-4: [1,2,5,7,8,9,10,11] noSwap=true  
  #    In the above pass-4 case swap doesn't occurs so noSwap is true and it breaks loop condition and prevents the time delay.
  #    So, the bubble sort is optimized and it is best use for partially sorted data.
