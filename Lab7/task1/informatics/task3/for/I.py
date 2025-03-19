def count_divisors(x):
    count = 1  
    i = 2  
    while i * i <= x:
        if x % i == 0:
            power = 0  
            while x % i == 0:
                x //= i
                power += 1
            count *= (power + 1)  
        i += 1
    if x > 1:  
        count *= 2  
    return count

x = int(input())

print(count_divisors(x))