def xor(x, y):
    return x != y

x = int(input())
y = int(input())

x_bool = bool(x)
y_bool = bool(y)

print(int(xor(x_bool, y_bool)))