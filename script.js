
//array of password length 
var PassLength = []


//prompt for password length 
varPassword = prompt ("what length is the password?")
if 

//alert for special character
varSpecialChar = confirm ("Would you like to use a special character")

//alert for lower case
varLowerCase = confirm ("Would you like to use a lower Case letter?")

//alert for upper case
varUpperCase = confirm ("Would you like to use a Upper case letter?")



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER 









// create functions for random numbers
// create functions for alphabets

//the user will be prompted to choose from the following password criteria:

//* Length (must be between 8 and 128 characters)

//* Character type:

  //* Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))

 // * Numeric characters

 // * Lowercase characters

 // * Uppercase characters




