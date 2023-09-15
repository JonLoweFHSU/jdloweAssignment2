function isEven(num){
    if(num % 2 === 0){
        return "Even"
    } else{
        return "Odd"
    }
}

let myNum = prompt("Give me a number")

// para.innerHTML=(isEven(myNum))

console.log(isEven(myNum))