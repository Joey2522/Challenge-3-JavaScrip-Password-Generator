
const keyStrings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: " ()*+,-./:;<=>?@[]^_`{|}~",
};
/*

// Assignment Code
let generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
  
  let passwordCharSet = '';

   var criteriaPrompt = window.confirm("Before we generate your password, please choose your password criteria.");
   if (!criteriaPrompt) {
    return
   }
  
   var length = window.prompt("Choose password length. Must be between 8-128 characters.");
 
   var lowercase = window.confirm("Would you like to use any lowercase letters in your password?");
   if (lowercase) {
     passwordCharSet += keyStrings.lowercase;
   };

   var uppercase = window.confirm("Would you like to use any uppercase letters in your password?");
   if (uppercase) {
     passwordCharSet += keyStrings.uppercase;
   };

   var numbers = window.confirm("Would you like to use any numbers in your password?");
   if (numbers) {
     passwordCharSet += keyStrings.number;
   };

   var symbols = window.confirm("Would you like to use any symbols?");
   if (symbols) {
     passwordCharSet += keyStrings.symbol;
   };

   var password = "";
   for (let i = 0; i < length; i++) {
     password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
   }
    return password;
  }

  console.log(writePassword());

  let password = document.querySelector("#password");
  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/

function generatePassword() {
  console.log("generate button is cliked, generate password is called");

  let passwordCharSet = '';

  var length = parseInt( window.prompt("Choose password length. Must be between 8-128 characters."));
  if (Number.isNaN(length)){
    alert(`"Password length must be a number, please retry. You typed in ${length}`);
    return "Passwword not generatedd because of invalid input. Please retry by pressing generate button.";

  }
  if (length < 8 || length > 128) {
    alert(`Password length must be between 8-128, please retry. You typed in ${length}`);
    return "Passwword not generatedd because of invalid input. Please retry by pressing generate button.";
  }

  var lowercase = window.confirm("Would you like to use any lowercase letters in your password?");
  if (lowercase) {
    passwordCharSet += keyStrings.lowercase;
  };

  var uppercase = window.confirm("Would you like to use any uppercase letters in your password?");
  if (uppercase) {
    passwordCharSet += keyStrings.uppercase;
  };

  var numbers = window.confirm("Would you like to use any numbers in your password?");
  if (numbers) {
    passwordCharSet += keyStrings.number;
  };

  var symbols = window.confirm("Would you like to use any symbols?");
  if (symbols) {
    passwordCharSet += keyStrings.symbol;
  };


}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);