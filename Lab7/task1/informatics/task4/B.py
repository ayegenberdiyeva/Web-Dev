N = int(input())

array = list(map(int, input().split()))

for number in array:
    if number % 2 == 0:
        print(number, end=" ")