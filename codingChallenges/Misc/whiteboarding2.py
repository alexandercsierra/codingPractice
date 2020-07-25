my_list = [85, 46, 27, 81, 94, 9, 27, 38, 43, 99, 37, 63, 31, 42, 14]

#iterate over every element of the list
#check if that number is divisble by 3
    #if it is print to console


def divisible_by_three(arr):
    for i in range(len(arr)):
        if arr[i] % 3 ==0:
            print(arr[i])

divisible_by_three(my_list)


word_nums = [
  "five",
  "twenty six",
  "nine hundred ninety nine,
  "twelve",
  "eighteen",
  "one hundred one",
  "fifty two",
  "forty one",
  "seventy seven",
  "six",
  "twelve",
  "four",
  "sixteen"
]


#create a dictionary of number words cooresponding to numbers
#loop through the list
    #split each sentence by spaces
    #add value of each word together
    #attempt to divide by 3
        #print if remainder is 0



number_words = {
    "one":1,
    "two":2,
    "three":3,
    "four":4,
    "five":5,
    "six":6,
    "seven":7,
    "eight":8,
    "nine":9,
    "ten":10,
    "eleven":11,
    "twelve":12,
    "thirteen":13,
    "fourteen": 14,
    "fifteen":15,
    "sixteen":16,
    "seventeen":17,
    "eighteen":18,
    "nineteen":19,
    "twenty":20,
    "thirty":30,
    "fourty":40,
    "fifty":50,
    "sixty":60,
    "seventy":70,
    "eighty":80,
    "ninety":90,
    "hundred": 100
}

def convert_nums(arr):
    for i in range(len(arr)):
    #split the words by space
    #get value of the numbers
    #add together
    #print
        
