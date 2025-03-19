a = int(input())  
b = int(input())  

result = []
for number in range(a, b + 1):
    sqrt = int(number**0.5)  
    if sqrt * sqrt == number:
        result.append(str(number))

if result:
    print(" ".join(result))