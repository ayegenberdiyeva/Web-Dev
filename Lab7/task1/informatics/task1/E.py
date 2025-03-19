v = int(input()) 
t = int(input())  

distance = v * t

mark = distance % 109

if mark < 0:
    mark += 109

print(mark)