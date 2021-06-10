var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var max = 0;
var maxItem;
for (const i of arr1) {
    var currentValue = (arr1.filter(item => item == i).length);
    if (currentValue > max) {
        max = currentValue;
        maxItem = i;
    }
}
console.log(max, maxItem);