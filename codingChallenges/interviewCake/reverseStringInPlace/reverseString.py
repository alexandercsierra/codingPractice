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



def reverseStr(string):
    for 

print(reverseStr('camp'))
