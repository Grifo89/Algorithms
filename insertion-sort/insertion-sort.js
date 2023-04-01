// insertion sort algorithm

const insertionSort = (array) => {
    for(let step = 1; step < array.length; step++) {
        key = array[step];
        j = step - 1;

        while (j > 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1
        }
        array[j + 1] = key
    }
    console.log(array)
}

insertionSort([2,3,64,754,56,6])