#dp to find the elements in array that makes up the target sum

def csum_ele(targetSum, arr, lis=[], memo={}):
    if targetSum in memo: return memo[targetSum]
    if targetSum == 0: return []
    if targetSum < 0: return None
    for ele in arr:
        remainder = targetSum - ele
        remainder_res = csum_ele(remainder, arr, lis, memo)
        if not remainder_res == None:
            lis.append(ele)
            memo[targetSum] = lis
            return lis
    memo[targetSum] = None
    return None

print(csum_ele(11,[2,3,5]))