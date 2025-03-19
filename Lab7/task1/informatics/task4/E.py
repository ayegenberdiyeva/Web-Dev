N = int(input())

array = list(map(int, input().split()))

result = "NO"
for i in range(N - 1):
    if (array[i] > 0 and array[i + 1] > 0) or (array[i] < 0 and array[i + 1] < 0):
        result = "YES"
        break

print(result)