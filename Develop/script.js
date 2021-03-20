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
  var passwordLength="";

  // Logic would go here

  // function generatePassword () {}

  const passwordLength = prompt("Length of password minimum 8 maximum 128 characters");

  console.log (passwordLength);

  // restricted to allow user to enter numeric value only non numeric characters not accepted

  if (isNaN(passwordLength)) {
    alert("Please enter a valid number");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert( "password should contain a minimum of 8 characters and not exceed 128 characters");
    return;
  }

  const passwordUpper = confirm("would you like password to contain uppercase characters?");
  console.log(passwordUpper);

  const passwordLower = confirm("would you like password to contain lowercase characters?");
  console.log(passwordLower)

  const passwordNumber = confirm("would you like password to contain numbers?");
  console.log(passwordNumber)

  const passwordSymbol = confirm("would you like password to contain symbols?");
  console.log(passwordSymbol)

  // user to select if they would like different arrays to form password using random selection

  if (passwordUpper) {
    const randomUpperIndex = Math.floor(Math.random() * 26);
  }

  if (passwordLower) {
    const randomLowerIndex = Math.floor(Math.random() * 26);
  }

  if (passwordNumber) {
    const randomNumberIndex = Math.floor(
      Math.random() * passwordNumbers.length
    );
  }

  if (passwordSymbol) {
    const randomSymbolIndex = Math.floor(
      Math.random() * passwordSymbols.length
    );
  }

  for (var i= 0; i <passwordLength; i++){
    password = password [Math.floor(Math.random() * passwordLength];
  }

  // Return our created password, password returned fits criteria of lenght stated in acceptance criteria >8 <128 with a selection of boolean values
  return password;
  function generatePassword ()
  var passwordTextArea= document.getElementById("password")
  passwordTextArea= password

  for(const passwordLength= 8; 128; randomUpperIndex, randomLowerIndex, randomNumberIndex, randomSymbolIndex) {
    console.log(passwordLength)
  }

 // Write password to the #password input
  function writePassword()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
