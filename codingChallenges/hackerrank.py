#given an array of numbers, return the count of matching pairs
def sockMerchant(n, ar):
    sock_dict = {}
    for i in range(len(ar)):
        if ar[i] not in sock_dict:
            sock_dict[ar[i]] = 1
        else:
            sock_dict[ar[i]] +=1

    for sock in sock_dict:
        sock_dict[sock] = sock_dict[sock]//2

    print('dict', sock_dict)
    values = list(sock_dict.values())
    count = sum(values)
    return count


# sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20
# ])

#return absolute value of the difference between the two diagnals of a 2d array
two_d_arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
even_arr = [[6,8],[-6,9]]

def diagonalDifference(arr):
    top = 0
    btm = 0
    
    for i in range(len(arr)):
        top += arr[i][i]
        btm += arr[i][len(arr)-1-i]


    return abs(btm-top)




# print(diagonalDifference(two_d_arr))


#return ratio of positive, negative, and zeroes in that order
def plusMinus(arr):
    num_dict = {'pos': 0, 'neg': 0, 'zero': 0}

    for num in arr:
        if num < 0:
            num_dict['neg'] +=1
        elif num == 0:
            num_dict['zero'] +=1
        elif num > 0:
            num_dict['pos'] +=1

    length = len(arr)

    pos_nums = round(num_dict['pos']/length, 6)
    neg_nums = round(num_dict['neg']/length, 6)
    zero_nums = round(num_dict['zero']/length, 6)


    print('{0:.6f}'.format(pos_nums))
    print('{0:.6f}'.format(neg_nums))
    print('{0:.6f}'.format(zero_nums))



# print(plusMinus([-4, 3, -9, 0, 4, 1 ]))
#expect output of .500000 .333333 .166667


#print out a staircase of hashes, right justified, starting with 1 hash with bottom being the input value

def staircase(n):
    stairs = ""

    for i in range(1, n+1):
        spaces = n-i
        current_spaces = [" "] * spaces
        current_hashes = ["#"] * i
        new_stair_arr = [*current_spaces, *current_hashes]
        stairs+="".join(new_stair_arr) + "\n"

    print(stairs)    

        






print(staircase(6))