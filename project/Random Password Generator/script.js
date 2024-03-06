const passwordBtn = document.getElementById("Password-op");
const length = 10;

const upperCase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol ="@!#$%^&*()_-{[}]\|?/<>";


const allChar = upperCase + lowerCase + number + symbol ;

function generatePassword(){
    let Password ="";
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += number[Math.floor(Math.random() * number.length)];
    Password += symbol[Math.floor(Math.random() * symbol.length)];

while(length > Password.length){
    Password += allChar[Math.floor(Math.random() * allChar.length)];
}
 passwordBtn.value = Password;

}
function copyPassword(){
    passwordBtn.select();
    document.execCommand("copy");
}