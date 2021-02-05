
def get_even_numbers(arr):
    enum = []
    for n in arr:
        if n % 2 == 0:
            enum.append(n)
    return enum


print(get_even_numbers([2, 4, 5, 6]))


#other solutions#

# def get_even_numbers(arr):
#     return [x for x in arr if x % 2 == 0]


# def is_even(x): return x % 2 == 0


# def get_even_numbers(arr):
#     return list(filter(is_even, arr))


# def get_even_numbers(arr):
#     return [v for v in arr if not v & 1]


# def get_even_numbers(arr):
#     return list(filter(lambda x: not x % 2, arr))


# def get_even_numbers(arr):
#     return [n for n in arr if n % 2 == 0]


# def get_even_numbers(arr):
#     return [a for a in arr if a % 2 == 0]


# def get_even_numbers(arr):
#     return [i for i in arr if i % 2 == 0]


# def get_even_numbers(_): return list(filter(lambda __: not __ % 2, _))


# def get_even_numbers(arr): return [i for i in arr if i % 2 == 0]


# def get_even_numbers(arr):
#     return [num for num in arr if not num % 2]


# def get_even_numbers(arr):
#     return [item for item in arr if not item % 2]


# def get_even_numbers(lst):
#     print(lst)
#     return [x for x in lst if not x % 2]


# def get_even_numbers(arr):
#     return [number for number in arr if number % 2 == 0]


# def get_even_numbers(arr):
#     return [int(num) for num in arr if num % 2 == 0]
