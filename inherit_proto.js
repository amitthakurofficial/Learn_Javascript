const myObj = {
  "name":"amit",
  "age":20,
  "addName":function() {
    // re"thakur";
  }
}
const element = "20";

const otherObj = {
  "otherDetails":"kuch ni"
}

console.log(myObj,otherObj);

// setting prototype
//old way
otherObj.__proto__ = myObj

//modern way
Object.setPrototypeOf(otherObj,myObj)


console.log(otherObj,otherObj.addName)

// console.log(sum(1,2,4,5))