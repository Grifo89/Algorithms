const getIndexToIns = (arr: number[], num: number): number | void => {
    // arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length -1 ; i++) {
        for (let j = 0; j < (arr.length -i - 1); j++) {
            if (arr[j + 1] < arr[j]){
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }
    
    return arr.length;
}

let a = getIndexToIns([40, 30, 5, 60], 50);
