var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mutation(arr) {
    var unique = new Set(arr[1].toLowerCase());
    var checkerArray = arr[1].toLowerCase().split('').filter(function (x) { return arr[0].toLowerCase().split('').includes(x); });
    var checkerSet = new Set(checkerArray);
    return unique.size === checkerSet.size && __spreadArray([], unique, true).every(function (x) { return checkerSet.has(x); });
}
console.log(mutation(["Noel", "Ole"]));
