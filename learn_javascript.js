let testStr  = `😂 😂`

console.log(testStr,testStr[0]);

// testStr[0]='p';

console.log(testStr,testStr[0])


let tempArray = [1,2,3]

tempArray.push(4)

console.log(tempArray.pop(),tempArray)



// ******************************** ARRAY METHODS ****************************************

// -------------------------  SPLICE METHOD -------------------------------------

// let tempArray = [2,3,4,5]

// console.log(tempArray.splice(0,2),tempArray)



// ARRAY CONCATINATE

// let firstArray = [4,56,7,78,8]

// let secondArray = ["amit","alok","sachin"]

// console.log(firstArray.concat(secondArray));

// ARRAY FIND METHOD


// let student = ["amit","alok","sachin"]

// //first way
// // let studentName = student.find(function(item) {
// //     if(item==="sachin ") {
// //         return true;
// //     } return ;
// // })

// //second way

// // let studentName = student.find(item => item==="sachin ")


// let studentNameArray = student.map(item => item)

// console.log(studentNameArray)



// ---------------------------------------------------- ITERATOR JAVASCRIPT ------------------------------------

// let range = {
//     from:1,
//     to:5
// }
// let start=0 ;
// let end=3;

// range[Symbol.iterator] = () => {
//     return {
//         next() {
//             start++;
//             if(start>end) {
//                 return {
//                     value:undefined,
//                     done:true
//                 }
//             } return {
//                 value:start,
//                 done:false
//             }
//         }
//     }
// }

// console.log(iterator.next())

// for(let num of range) {
//     console.log(num)
// }

// console.log([...range])





//----------------------------------------------------------------- MAP JAVASCRIPT --------------------------------------------------


// let regularObj = {
//     'name':'amit',
//     age:20,
//     'age':30
// }

// console.log(regularObj,regularObj.age,regularObj['age'])


// let regularMap = new Map();

// regularMap.set('1','20');
// regularMap.set(1,'30');

// console.log(regularMap.get(1),regularMap.get('1'))








