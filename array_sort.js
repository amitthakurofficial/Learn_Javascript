let arr = [20,5,15,10,18,4]
let temp = []
arr.forEach(element => {
    let largest=element;
    arr.forEach(item => {
        if(item>largest && !temp.includes(item)) {
            largest=item;
        }
    })
    temp.push(largest);
    // arr.splice(,0)
    // console.log("arrr",temp)
});
console.log(temp)
