const getSum = (...arg) => {
    console.log(arg)
}

getSum(1, 2, 3, 4)
getSum(1)(2)(3)(4)
getSum(1, 2)(3, 4)
getSum(1, 2, 3)(4)
getSum(1)(2, 3, 4)