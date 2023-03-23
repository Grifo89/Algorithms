# Insertion sort in Python

def insertionSort(array):
    
    for step in range(1, len(array)):
        key = array[step]
        j = step - 1

        while j > 0 and array[j] > key:
            array[j + 1] = array[j]
            j = j - 1
        array[j + 1] = key
    
    print(array)

insertionSort([2,3,64,754,56,6])


