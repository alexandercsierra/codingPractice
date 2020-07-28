'''
Reverse String in Place
'''

def reverseStr3ltr(string):
    str_list = list(string)
    first = str_list[0]
    last = str_list[-1]

    f_index=0
    l_index = len(str_list)-1


    while str_list[0] != last or str_list[-1] != first:

        if str_list[-1] != first:
            next_letter = str_list[f_index+1]
            str_list[f_index] = next_letter
            str_list[f_index+1] = first

            f_index = str_list.index(first)
            l_index = str_list.index(last)

        if str_list[0] != last:
            prev = str_list[l_index-1]
            str_list[l_index] = prev
            str_list[l_index-1] = last

            f_index = str_list.index(first)
            l_index = str_list.index(last)

    return str_list


#interview cake solution
  def reverse(list_of_chars):

    left_index  = 0
    right_index = len(list_of_chars) - 1

    while left_index < right_index:
        # Swap characters
        list_of_chars[left_index], list_of_chars[right_index] = \
            list_of_chars[right_index], list_of_chars[left_index]
        # Move towards middle
        left_index  += 1
        right_index -= 1

print(reverseStr('camp'))
