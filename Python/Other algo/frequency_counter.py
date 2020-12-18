def frequencyCheck(arr1,arr2):
    if len(arr1) != len(arr2):
        return False
    frequency_obj1 = {}
    frequency_obj2 = {}

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

    print(frequency_obj1,frequency_obj2)
    for key in frequency_obj1:
        if(not(key**2 in frequency_obj2)):
            return False
        if(frequency_obj1[key] != frequency_obj2[key**2]):
            return False
    return True

print(frequencyCheck([1,2,3],[4,4,1]))