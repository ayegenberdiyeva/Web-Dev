a = int(input())  
b = int(input())  
c = int(input())  
d = int(input())  

result = []
for number in range(a, b + 1):
    if number % d == c:
        result.append(str(number))

if result:
    print(" ".join(result))