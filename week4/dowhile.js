
let Password;
let userPassword;

do{
    Password = prompt("Enter a password")
    userPassword = prompt("enter password again.")
    
    if(userPassword != Password){
        alert("Try again.")
    }
}while(Password != userPassword);
