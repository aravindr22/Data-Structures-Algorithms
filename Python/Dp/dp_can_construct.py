
def canConstruct(target, words, memo={}):
    if target in memo: return memo[target]
    if target == '': return True

    for ele in words:
        if ele in target:
            if target.index(ele) == 0:
                suffix = target[len(ele):]
                if canConstruct(suffix, words):
                    memo[target] = True
                    return True
    memo[target] = False
    return False

print(canConstruct("abcdef", ["ab","cd","abc","abcd","def"]));
print(canConstruct("eeeeeeeeeeeeeeeeeeeeeee", ["ee","eeeee","eeeeeeee","eeeeeeeeee"]));