var getIndexToIns = function (arr, num) {
    var index = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j + 1] < arr[j]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    console.log(arr);
    return index;
};
var a = getIndexToIns([40, 30, 5, 60], 50);
console.log(a);
