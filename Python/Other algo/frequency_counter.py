#Frequency counter is also known as Hash map
#Hash map (or) Frequency counter is implemented using Dictionaries
#Anagram check is application of frequency counter
#Anagram Check is where we compare two words where it contains same no.of elements
#(i.e) school,chsolo is anagram where length and letters are same
#school,scloh is not an anagram because length and letters are not same


def frequencyCheck(arr1,arr2):
    
    #Checks if length of both strings are same. If not return false
    if len(arr1) != len(arr2):
        return False

    #Declaring dictionaries for 2 strings
    frequency_obj1 = {}
    frequency_obj2 = {}

    #Mapping each letter to dictionary
    #for example school is mapped as {'s': 1, 'c': 1, 'h': 1,'o': 2,'l': 1}
    for val in arr1:
        if val in frequency_obj1:
            frequency_obj1[val] = frequency_obj1[val] + 1
        else:
            frequency_obj1[val] = 1

    for val in arr2:
        if val in frequency_obj2:
            frequency_obj2[val] = frequency_obj2[val] + 1
        else:
            frequency_obj2[val] = 1
    
    #To check the mapped strings uncomment the below line
    #print(frequency_obj1,frequency_obj2)
    for key in frequency_obj1:
        
        #Checks if element in 1st string present in 2nd string
        if(not(key in frequency_obj2)):
            return False

        #Checks if the no.of element in 1st string and no.of element in 2nd string are same
        if(frequency_obj1[key] != frequency_obj2[key]):
            return False
    return True

print(frequencyCheck("school","chools"))