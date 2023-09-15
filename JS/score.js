let score = prompt("What is your age?");

if(score <= 100){
    para.innerHTML = "The grade is A"
} else if (score <= 89 ){
    para.innerHTML = "The grade is B"
} else if(score <= 79){
    para.innerHTML = "The grade is C"
} else if(score <= 69){
    para.innerHTML = "The grade is D."
} else {
    para.innerHTML = "Invalid score"
}