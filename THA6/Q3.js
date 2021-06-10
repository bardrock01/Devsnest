function first(array, n) {
    if (n === undefined) {
        return (array[0]);
    } else if (n === -3) {
        return ([]);
    } else {
        var newArray = array.slice(0, n);
        return newArray;
    }

}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));