// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


/*
// Function to prompt user for password options
function getPasswordOptions() {
  alert("Please set the length of your password!");
  prompt("Choose your password length between 10 and 64 characters.")
}

getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {

}

*/

// Function to generate password with user input
function generatePassword() {
  let passwordLength = prompt("Choose your password length between 10 and 64 characters.");
  if (passwordLength < 10 || passwordLength > 64) {
    alert(`You must choose a password that's length is between 10 and 64 characters.`)
    return generatePassword()
  }

  /* NOT WORKING code to exclude non-integer numbers and non-numbers 

  let passwordLength = prompt("Choose your password length between 10 and 64 characters.");
      if (passwordLength < 10 || passwordLength > 64 || passwordLength == !Number.isInteger || passwordLength == isNaN()) {
      alert(`You must choose a password that's length is between 10 and 64 characters and is a whole number`)
      return generatePassword()
 }

 */

  console.log(passwordLength)


  let possibleCharacters = []


  let confirmLower = confirm("Would you like to include lowercase characters?");

  if (confirmLower) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
  }

  let confirmUpper = confirm("Would you like to include uppercase characters?");

  if (confirmUpper) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
  }

  let confirmNumber = confirm("Would you like to include numeric characters?");

  if (confirmNumber) {
    possibleCharacters = possibleCharacters.concat(numericCharacters)
  }

  let confirmSpecial = confirm("Would you like to include special characters?");

  if (confirmSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
  }

  let randomPassword = "";

  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * possibleCharacters.length);
    randomPassword += possibleCharacters.substring(randomNumber, randomNumber + 1);
  }

  console.log(randomPassword)
  // return (`Your new password is: ${possibleCharacters}`)

}




/* NOT WORKING code to select random numbers from possibleCharacters array at passwordLength chosen by user 

function randomChar() {
  const rnd = Math.floor(Math.random() * possibleCharacters.length);
  return possibleCharacters.splice(rnd, 1);
}

while (possibleCharacters.length > 0) {
  console.log(randomChar(), possibleCharacters);
}


*/


// Function to generate password with user input










// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);