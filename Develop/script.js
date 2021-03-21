// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare a new function on line 3
function generatePassword() {
  var passwordLowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var passwordUppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var passwordNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var passwordSymbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "~",
    "|",
    "}",
    "{",
    "[",
    "]",
    ":",
    ";",
    "?",
    ">",
    "<",
    ",",
    ".",
    "/",
    "-",
    "=",
  ];

  // Create a variable to store our generated password, variable is length stated and prompts
  var password = "";
  var passwordLength = "";
  var options = [];

  passwordLength = prompt(
    "Length of password minimum 8 maximum 128 characters"
  );

  // restricted to allow user to enter numeric value only non numeric characters not accepted

  if (isNaN(passwordLength)) {
    alert("Please enter a valid number");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "password should contain a minimum of 8 characters and not exceed 128 characters"
    );
    return;
  }
  // Confirms to ensure the user is selecting choices suited to their password requirements
  const passwordUpper = confirm(
    "would you like password to contain uppercase characters?"
  );

  const passwordLower = confirm(
    "would you like password to contain lowercase characters?"
  );

  const passwordNumber = confirm("would you like password to contain numbers?");

  const passwordSymbol = confirm("would you like password to contain symbols?");

  // user to select if they would like different arrays to form password using random selection

  if (passwordUpper) {
    options = [...options, ...passwordUppercase];
  }

  if (passwordLower) {
    options = [...options, ...passwordLowercase];
  }

  if (passwordNumber) {
    options = [...options, ...passwordNumbers];
  }

  if (passwordSymbol) {
    options = [...options, ...passwordSymbols];
  }

  for (var i = 0; i < passwordLength; i++) {
    password += options[Math.floor(Math.random() * options.length)];
  }

  // Return our created password, password returned fits criteria of length stated in acceptance criteria >8 <128 with a selection of boolean values
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
