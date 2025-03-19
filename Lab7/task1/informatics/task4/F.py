N = int(input())

array = list(map(int, input().split()))

count = 0
for i in range(1, N - 1):  
    if array[i - 1] < array[i] and array[i + 1] < array[i]:
        count += 1

print(count)