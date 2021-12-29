
let str1 = "maraaa";
let str2 = "ammara"

let countSt1= {};

let countStr2 = {} 

for(let i=0; i<str2.length; i++) {
    // console.log(countSt1[str1[i]],str1[i])
    if(countSt1[str1[i]]===0 || countSt1[str1[i]]) {
        console.log("if case ",countSt1,str1)
        countSt1[str1[i]] =countSt1[str1[i]]+1;
    } else {
        console.log("else case ",countSt1,str1[i],countSt1[str1[i]])
        countSt1[str1[i]]=0;
    }

    if(countStr2[str2[i]]===0 || countStr2[str2[i]]) {
        countStr2[str2[i]] +=1;
    } else{
        countStr2[str2[i]]=0;
    }
}

// countSt1.forEach(element => {
    for(let element in countSt1) {
    console.log(element)
}

console.log(countSt1,countStr2)