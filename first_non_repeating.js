let str = "abdcbcaabc";

let temp = {}
for(let item of str) {
    if(temp[item]==0 || temp[item]) {
        temp[item]+=1
    } else {
        temp[item]=0
    }
}


for(let letter in temp) {
    if(temp[letter]===0) {
        console.log(letter)
        break;
    }
}

// console.log(temp)