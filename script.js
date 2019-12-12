
//ask prompt User question 

var Userinput;
var UserLength = prompt("what length is the password?");
var UserSpecialChar = confirm("does it contain special character?");
var UserLowerCase = confirm("does it contain Lower case " );
var userUpperCase = confirm("does it contain Upper case ");


// // Get arrays
// var num = [1,2,3,4,5,6,7,8,9,0];
// var lower_alphabets= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// var char = ['@' ,'#','$','%','^','&','*','()','{}','[',']','=','<','>','/',','];
// var upper_alphabets = ['A','B','C','D','E','F','G,'H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//Functions

function UpperCase(length) {

    var result           = '';
 
    var Uppercharacters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 
    var charactersLength = characters.length;
 
    for ( var i = 0; i < length; i++ ) {
 
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
 
    }
 
    return result;
 
 }

 function lowerCase(length) {

    var result           = '';
 
    var Lowercharacters       = 'abcdefghijklmnopqrstuvwxyz';
 
    var charactersLength = characters.length;
 
    for ( var i = 0; i < length; i++ ) {
 
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
 
    }
 
    return result;
 
 }
 
  
 
 function makeNum(length) {
 
    var result           = '';
 
    var characters       = '0123456789';
 
    var charactersLength = characters.length;
 
    for ( var i = 0; i < length; i++ ) {
 
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
 
    }
 
    return result;
 
 }
 
  
 
 function makeSC(length) {
 
    var result           = '';
 
    var characters       = '!@#$%^&*():;"?/<>,.';
 
    var charactersLength = characters.length;
 
    for ( var i = 0; i < length; i++ ) {
 
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
 
    }
 
    return result;
 
 }
 
 function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    var generateBtn = document.querySelector("#generate");

    //array of password length 
    var PassLength = 0
    passwordText.value = password;

 }


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

// function copyToClipboard() {
//   // BONUS 
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // BONUS EVENT LISTENER 










// create functions for random numbers
// create functions for alphabets

//the user will be prompted to choose from the following password criteria:

//* Length (must be between 8 and 128 characters)

//* Character type:

  //* Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))

 // * Numeric characters

 // * Lowercase characters

 // * Uppercase characters




