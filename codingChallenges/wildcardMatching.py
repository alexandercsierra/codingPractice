#Wildcard Matching in LeetCode

class Solution:
    def isMatch(self, s: str, p: str)-> bool:
        #use a dynamic programming approach (recursion that is augmented with caching)


        #first think of with only recursion
        #what are our base cases?
            #if the string s is empty
                #if the pattern is also empty or is *
                    #return True
                #if pattern is not empty or is ?
                    #return False

            #if the pattern is empty
                #if s is empty
                    #return true
                #else
                    #return False

        #handling asterisks in pattern
        #what happens when p[0] is '*'
            #match any number of characters or match empty sequence
            
        #