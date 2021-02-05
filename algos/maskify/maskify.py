# // // Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen.Instead, we mask it.

# // // Your task is to write a function maskify, which changes all but the last four characters into '#'.

# // Examples
# // maskify("4556364607935616") == "############5616"
# // maskify("64607935616") == "#######5616"
# // maskify("1") == "1"
# // maskify("") == ""

# // // "What was the name of your first pet?"
# // maskify("Skippy") == "##ippy"
# // maskify("Nananananananananananananananana Batman!") == "####################################man!"

#My solution
def maskify(nums):
    string = ''
    for num in nums[:-4]:
        string += '#'
    string += nums[-4:]
    return string


#other solutions

# #version 2
# def maskify(cc):
#     return "#"*(len(cc)-4) + cc[-4:]

# #version 3
# def maskify(cc):
#     l = len(cc)
#     if l <= 4:
#         return cc
#     return (l - 4) * '#' + cc[-4:]

# #version 4
# def maskify(cc):
#     return '{message:#>{fill}}'.format(message=cc[-4:], fill=len(cc))

# #version 5
# def maskify(cc):
#     word = list(cc)

#     for i in range(len(word) - 4):
#         word[i] = '#'
#     return ''.join(word)
#     pass

# #version 6
# def maskify(cc):
#     width = len(cc)
#     return cc[-4:].rjust(width, '#')

# #version 7
# def maskify(cc):
#     return cc[-4:].rjust(len(cc), "#")

# #version 8
# def maskify(cc):
#     return "#" * len(cc[:-4]) + cc[-4:]

# #version 9
# def maskify(cc):
#     if len(cc) < 4:
#         return cc
#     return "#" * (len(cc)-4) + cc[-4:]

# #version 10
# maskify = (
#     lambda c: (
#         '#'*(len(
#             c)-4)+c
#         [-4:])
# )
