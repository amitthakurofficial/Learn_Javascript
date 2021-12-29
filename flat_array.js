
// numArray.concat
// let temp = numArray.reduce((newArray, item) => (
//     item,
//     console.log('item',item)
// ))
const flattenArray = (numArray) => (
    // console.log(numArray),
    numArray.reduce((newArray,item) => (
        newArray.concat(Array.isArray(item)?flattenArray(item):item)
    ),[])
)
let numArray = [[[1, [1.1]], 2, 3], [4, 5]];

console.log(flattenArray(numArray))

// console.log(numArray.flat(Infinity))
