#----------------------Radix Sort TimeComplexity---------------------
#----------Radix Sort can only be used for integers------------------
#Best Case     :- O(nk)
#Average Case  :- O(nk)
#Worst Case    :- O(nk)

#Space Comlexity :- O(n+k)

#Where n is the length of the array
#      k is the length of the largest element in the array


import math
from operator import add
from functools import reduce

#To get the digit value in given position 
#Ex: if (2512,2) is passed 
#1 is returned because from left 1 is at second position
def getDigit(value, pos):
    return math.floor(abs(value) / 10**pos) % 10

#To count the length of the digit
#Ex: if we pass 243 it returns 3
def digitLength(value):
    if value == 0: return 1
    return math.floor(math.log10(value)) + 1

#To find the longest digit(by length) in the array
def mostDigits(nums):
    maxValue = 0
    for i in range(len(nums)):
        maxValue = max(maxValue, digitLength(nums[i]))

    return maxValue

def randixSort(nums):
    largest_digit_length = mostDigits(nums)
    for i in range(largest_digit_length):
        digitBuckets=[[],[],[],[],[],[],[],[],[],[]]            #Creating a two dimension array
        for j in range(len(nums)):
            digit = getDigit(nums[j],i)
            digitBuckets[digit].append(nums[j])                 #Pushing by the value in respective bucket
        nums = reduce(add, digitBuckets)                        #Converting 2d array into 1d array
    
    return nums
    



print(randixSort([23,2,4521,165,236,12]))