N = int(input())

array = list(map(int, input().split()))

positive_count = 0
for number in array:
    if number > 0:
        positive_count += 1

print(positive_count)