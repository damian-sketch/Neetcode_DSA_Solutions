# A recursive function to find the sum of numbers from 1 to n

def find_sum(n):
    if n == 1:
        return 1
    return n + find_sum(n-1)


if __name__ == '__main__':
    print(find_sum(5))
