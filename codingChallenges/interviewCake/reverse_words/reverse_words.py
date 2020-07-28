message = [ 'c', 'a', 'k', 'e', ' ',
            'p', 'o', 'u', 'n', 'd', ' ',
            's', 't', 'e', 'a', 'l' ]

def reverse_words(message):

    left_index_start = 0
    left_index_end = 0
    right_index_start = len(message)-1
    right_index_end = len(message)-1


    while left_index_start < right_index_start:
        while message[left_index_end] != " " and left_index_end < len(message)-1:
            left_index_end += 1
        
        while message[right_index_start] != " " and right_index_start > 0:
            right_index_start -=1

        # print('left start', left_index_start)
        # print('left end', left_index_end)
        # print('right start', right_index_start)
        # print('right end', right_index_end)

        left_length = left_index_end - left_index_start - 1
        right_length = right_index_end - right_index_start -1


        if left_length > right_length:
            diff = left_length - right_length
            #insert that number of spaces into the array

        if right_length > left_length:
            diff = right_length - left_length
            #insert that number of spaces into the array

        message[left_index_start:left_index_end-1], message[right_index_start:right_index_end] = message[right_index_start+1:right_index_end], message[left_index_start:right_index_end]

        left_index_start = left_index_end+1
        left_index_end +=1

        right_index_start = right_index_end+1
        right_index_end += 1

    print(''.join(message))


# print(reverse_words(message))
print(message[5:10])