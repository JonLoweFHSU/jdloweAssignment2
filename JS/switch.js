let choice = prompt("what is your age?")
switch(choice){
    case (choice <= 100 ):
        console.log("The grade is A");
        break;
    case (choice <= 89 ):
        console.log("The grade is B");
        break;
    case (choice <= 79):
        console.log("The grade is C");
        break;
    case (choice <= 69):
        console.log("The grade is D");
        break;
    default:
        console.log("Invalid response.")
}
