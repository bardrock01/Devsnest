function array_clone(array) {
    var newArray = array.slice(0);
    return newArray;
}
console.log(array_clone([1, 2, 4, 0]));
console.log(array_clone([1, 2, [4, 0]]));