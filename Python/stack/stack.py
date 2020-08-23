
stack = []

print("1)Push\t2)Pop\t3)Display")

while True:
    n = int(input())
    if n == 1:
        print("Enter THe number: ")
        stack.append(int(input()))
    if n == 2:
        print("The Poped element: " + stack.pop())
    if n == 3:
        print(stack)
    if n > 3:
        break
