
//ask prompt User questions

var userinput;
var passwordLength = prompt("what length is the password?");
//if statement for password length
//if (passwordLength < 8 && passwordLength > 128) {
    var containsSpecial = confirm("does it contain special character?");
    var containsLower = confirm("does it contain Lower case " );
    var containsUpper = confirm("does it contain Upper case ");
    var containsNumbers = confirm("does it contain numbers ");

//alert the user about password length
//} else {
    alert("Password must be between 8 and 128  characters");
//}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', writePassword)


// // Get arrays
var num = [1,2,3,4,5,6,7,8,9,0];
var lower_alphabets= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var char = ['@','#','$','%','^','&','*','(',')','{','}','[',']','=','<','>','/',','];
var upper_alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//Functions

function generatePassword() {

    if (passwordLength < 8) {
        return 'Password not long enough';
    } else if (passwordLength > 158) {
        return 'Password is too long!'
    }

    if (!containsSpecial && !containsLower && !containsUpper && !containsNumbers) return 'No Characteres Selected'

    var count = 0;
    var password = '';
    if (containsSpecial) count++
    if (containsLower) count ++
    if (containsUpper) count ++
    if (containsNumbers) count++
    var charactersPerCategory = Math.floor(passwordLength / count);

    var extraCharacters = passwordLength % count

    //for loop
    for (var i= 0; i < charactersPerCategory; i++ ){
        console.log('in the loop')
        // if contains variable is true, add a random character from its matching array to the password string;
        if (containsSpecial) {
            password = password + char[Math.floor(Math.random() * char.length)]
        }
        if (containsUpper){
            password = password + upper_alphabets[Math.floor(Math.random ()* upper_alphabets.length)]
        }
        if (containsLower){
            password = password + lower_alphabets[Math.floor(Math.random ()* lower_alphabets.length)]
        }
        if (containsNumbers){
            password = password + num[Math.floor(Math.random ()* num.length)] 
        }    

    }

    for (var i = 0; i < extraCharacters; i++) {
        if (containsLower) {
            password = password + lower_alphabets[Math.floor(Math.random ()* lower_alphabets.length)]
        } else if (containsUpper){
            password = password + upper_alphabets[Math.floor(Math.random ()* upper_alphabets.length)]
        } else if (containsNumbers){
            password = password + num[Math.floor(Math.random ()* num.length)] 
        } else if (containsSpecial) {
            password = password + char[Math.floor(Math.random() * char.length)]
        }
    }
 //   console.log({passwordLength, containsSpecial, containsLower, containsUpper, containsNumbers, count, charactersPerCategory, extraCharacters, password})
    return password;
}
 
 function writePassword() {
    var password = generatePassword();
    // console.log({password})
    // var passwordText = document.querySelector("#password");
    document.querySelector("#password").value = password;
    //array of password length 
    // passwordText.value = password;

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




