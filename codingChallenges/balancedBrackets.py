
def balancedBrackets(string):
    
    stack = []
    #list of only symbols
    symbol_list = []

    pairs = {
        '[': ']',
        '(': ')',
        '{': '}'
    }

    keys = list(pairs.keys())
    vals = list(pairs.values())


    #loop through string and append symbols to the symbol_list
    for letter in string:
        if letter in keys or letter in vals or letter == "|":
            symbol_list.append(letter)

    length = len(symbol_list)
    i = 0
    for symbol in symbol_list:
        if symbol == "|":
            if stack[-1] == "|" and len(stack) > 0:
                stack.pop()
            else:
                stack.append(symbol)
        elif symbol in keys:
            stack.append(symbol)

        elif symbol in vals:
            if stack[-1] in keys:
                if pairs[stack[-1]] == symbol and len(stack) > 0:
                    stack.pop()
                else:
                    return False
            else:
                return False


    if len(stack) == 0:
        return True
    else:
        return False

        


print(balancedBrackets('[{]'))
print(balancedBrackets('[|{|(||)|}|]'))