
const keyStrings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: " ()*+,-./:;<=>?@[]^_`{|}~",
};

function generatePassword() {

  let passwordCharSet = '';

  var length = parseInt(window.prompt("Choose password length. Must be between 8-128 characters."));
  if (Number.isNaN(length)){
    alert(`Password length must be a number, please retry. You typed in ${length}`);
    return "Password not generated because of invalid input. Please retry by pressing generate password button.";
  }

  if (length < 8 || length > 128) {
    alert(`Password length must be between 8-128, please retry. You typed in ${length}`);
    return "Password not generated because of invalid input. Please retry by pressing generate password button.";
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

  var symbols = window.confirm("Would you like to use any symbols in your password?");
  if (symbols) {
    passwordCharSet += keyStrings.symbol;
  };

  if (lowercase === false && uppercase === false && numbers === false && symbols === false) {
    alert("At lease one character type should be chosen. Please retry");
    return "Password not generated because of invalid input. Please retry by pressing generate password button.";
  }

  var password = "";
   for (let i = 0; i < length; i++) {
     password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
    return password;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);