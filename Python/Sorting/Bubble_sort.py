#------------Bubble Sort complexity----------------
# Best Case - O(n)
# Average Case - O(n^2)
# Worst Case - O(n^2)

def Bubble_sort(array):
    
    array_length = len(array)
    for i in range(0,array_length):

        #The minus i is added here because after each pass greatest element will sorted and placed at last
        #So there is no need of checking again so we eleminate out to minimize the time complexity
        for j in range(0,array_length - i - 1):

            #If the first element is greater than seconde element then the swap process occurs
            if array[j] > array[j+1]:
                
                #Swapping elements using python shorthand
                array[j+1], array[j] = array[j], array[j+1]

        #To see the partial sorted array after every pass remove the comment of below code
        #print(array)

    return array 


print(Bubble_sort(['z','s','a','t','b']))
print(Bubble_sort([7,3,6,1,5,4]))