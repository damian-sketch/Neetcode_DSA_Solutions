# An iterative function to find the sum of numbers from 1 to n

def find_sum(n):
    sum = 0
    for i in range(1, n+1):
        sum += i
    return sum


if __name__ == '__main__':
    print(find_sum(5))
