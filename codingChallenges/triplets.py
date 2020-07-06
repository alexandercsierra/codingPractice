#given an array of numbers make triples that add to target
#[1,2,3,4,5,6,8,9] => 15 => [[1,6,9], [3,4,8]] etc in their own array and ordered by lowest first index, then second, then third
#[1,6,9] is the same as [1,9,6] and should not be counted twice

def triplets(arr, target):

    result = []

    for x in arr:
        for y in arr:
            for z in arr:
                if x + y + z == target:
                    result.append([x,y,z])
    
    return result


def triplets_improved(arr, target):

    result = []

    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            for k in range(j+1, len(arr)):
                if [arr[i], arr[j], arr[k]] not in result:
                    if arr[i] + arr[j] + arr[k] == target:
                        result.append([arr[i], arr[j], arr[k]])
    
    return result


nums = [1,2,3,4,5,6,8,9]

print(triplets_improved(nums, 15))






[[1, 5, 9], [1, 6, 8], [2, 4, 9], [2, 5, 8], [4, 5, 6], [8, 3, 4]]