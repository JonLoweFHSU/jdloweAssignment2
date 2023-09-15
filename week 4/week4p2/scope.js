let globalvar = "This is Global variable!"

function outerFun(){
    let outerVar = "THis is a Outer var!"

    console.log(globalVar)
    console.log(outerVar)

    function innerFun (){
        let innerVar = "This is inner Var!"
        console.log(globalVar)
        console.log(outerVar)
        console.log(innerVar)
    }

    innerFun()
    console.log(innerVar)
}

outerFun()
