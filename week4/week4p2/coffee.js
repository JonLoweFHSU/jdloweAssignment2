function makeCoffee(type){
    if(type === "expresso"){
        return "Here's your expresso"
    } else if (type === "latte"){
        return "Here's your latte"
    } else {
        return "sorry I don't have this coffee"
    }
}

console.log(makeCoffee("latte"))