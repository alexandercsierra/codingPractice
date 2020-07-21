


def mergingMeetingsFirstAttempt(arr):
    arr.sort()

    counter = 0
    result = []

    while(counter<len(arr)-1):
        if arr[counter][1] >= arr[counter+1][0]:
            if arr[counter][1] <= arr[counter+1][1]:
                result.append((arr[counter][0], arr[counter+1][1]))
            else:
                result.append(arr[counter])
            counter += 2
        else: 
            result.append(arr[counter])
            #if last item does not need to be merged, should still be added
            if(counter + 1 >= len(arr)-1):
                result.append(arr[counter+1])
            counter +=1

    return result



def mergingMeetings(arr):
    arr.sort()
    resCount = 0
    result = [arr[0]]
    minTime = arr[0][0]
    maxTime = arr[0][1]
    counter = 1

    while counter < len(arr):
        if arr[counter][0] <= maxTime:
            if arr[counter][1] <= maxTime:
                counter +=1
            else:
                result[resCount] = (minTime, arr[counter][1])
                maxTime = arr[counter][1]
                counter +=1
        else:
            result.append(arr[counter])
            minTime = arr[counter][0]
            maxTime = arr[counter][1]
            resCount+=1
            counter+=1
    return result



print(mergingMeetings([(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]))
print(mergingMeetings([(1,2), (2,3)]))
print(mergingMeetings([(1,5), (2,3)]))
print(mergingMeetings([(1, 10), (2, 6), (3, 5), (7, 9)]))