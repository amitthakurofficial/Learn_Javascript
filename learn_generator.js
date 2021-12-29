function * getName() {
    yield "amit";
    yield "alok";
    yield "vipin";
}

let generator = getName()

let first = generator.next();
console.log(first)
let second = generator.next();

console.log(second)
let third = generator.next();

console.log(third)
console.log(generator.next())

