// Assignment Code
var specialchars = [
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
  '.',
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowercase = [
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
  'z',
];

var uppercase =
[
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
  'Z',
];


function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to contain?"))
  if (Number.isNaN(length)){
    alert("Must be a number!")
    return null
  }
  if (length < 8 || length > 128) {
    alert("Must be between 8 and 128!")
    return null
  }
  var hasSpecial = confirm("click ok to include special characters!")
  var hasNumbers = confirm("click ok to include numbers!")
  var hasLower = confirm("click ok to include lower case letters")
  var hasUpper = confirm("click ok to include upper case letters!")

  if (
    hasSpecial === false && 
    hasNumbers === false &&
    hasLower === false &&
    hasUpper === false 
  ) {
    alert("Must select at least one character type!")
    return null
  }

  var passwordOptions = {
    len: length, 
    spec: hasSpecial,
    num: hasNumbers,
    low: hasLower,
    up: hasUpper,
  }
  return passwordOptions
}

function getRandom(arr){
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElement = arr[randomIndex]
  return randomElement
}

function generatePassword(){
  var options = getPasswordOptions()
  var result = []
  var possibleChar = []
  var guaranteedChar = []

  if (options.spec){
    possibleChar = possibleChar.concat(specialchars)
    guaranteedChar.push(getRandom(specialchars))
  }

  if (options.num){
    possibleChar = possibleChar.concat(numbers)
    guaranteedChar.push(getRandom(numbers))
  }

  if (options.low){
    possibleChar = possibleChar.concat(lowercase)
    guaranteedChar.push(getRandom(lowercase))
  }

  if (options.up){
    possibleChar = possibleChar.concat(uppercase)
    guaranteedChar.push(getRandom(uppercase))
  }

  for(var i=0; i<options.len; i++){
    var char = getRandom(possibleChar)
    result.push(char)
  }

  for(var i=0; i<guaranteedChar.length; i++){
    result[i]=guaranteedChar[i]
  }
  return result.join("")


  // must return a string value that is the password.

  // Prompt user to choose num btwn 8 and 128
    //  var to save length
    //  validate user num 

  // confirm user upper, lower, num, special characters ( 4 confirm prompts)
    // 4 vars to save T/F to included characters
    // Validate that at least one cat was chosen

  // Vars that include all user options of each category. Array of string for each cat.

  // var upper = [" A", "B"]

  // If user says yes to include that cat choose random(Math.random) elements from the array
    // How to decide how many elements to choose from each array
  //

  // Join chosen elements into a string
  return passwordString; 


};


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



