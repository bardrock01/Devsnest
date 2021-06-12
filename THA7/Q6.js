// // var newArr = [];
// var library = [
//     { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
//     { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
//     { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
// ];

// console.log(library.librarayID.sort());


//  Output: [
// { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" },
// { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, 
// { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }
// ]

// for (item in library) {
//     newArr.push(library[item].libraryID);

// }
// console.log("this is new array2" + newArr);
// newArr.sort(function(a, b) {
//     library.
//     return b - a 
// });
// console.log(newArr);
// // newArr.sort(function(a, b) { return a - b });
// // console.log(newArr);
for (const item in library) {
    arr[item] = (library[item].libraryID);
}
arr.sort((a, b) => b - a);
for (const temo in library) {
    for (var j in library) {
        if (arr[temo] == (library[j].libraryID)) {
            console.log(library[j]);
        }
    }
}