#Dp to find no of paths in given array of size n*m

def npaths(n, m, memo={}):
    key = str(n) + "," + str(m)
    if key in memo: return memo[key]
    if n == 0 or m == 0:
        return 0
    if n == 1 and m == 1:
        return 1
    memo[key] = npaths(n-1,m) + npaths(n,m-1)
    return memo[key]

print(npaths(2,3))
print(npaths(2,2))
print(npaths(3,3))
print(npaths(6,13))