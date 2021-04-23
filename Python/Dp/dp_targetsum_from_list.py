#Dp to check whether the number in the list can bring up the target sum

def csum(n, arr, memo={}):
    if n in memo: return memo[n]
    if n == 0: return True
    if n < 0: return False
    for i in arr:
        if csum(n-i,arr, memo): 
            memo[n] = True
            return True
    memo[n] = False
    return False

print(csum(301,[7,14]))