// Variables users can choose 

var userCharacters = []
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specials = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
}

// Pop-Up for Character Length
function generatePassword() {
var characterLength = 0
while((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === false){
characterLength = parseInt(prompt("How many characters would you like your password to contain? \n (must be between 8 - 128 characters)"))
}

var specialCharacters = false
var numericCharacters = false
var lowercaseCharacters = false
var uppercaseCharacters = false

// If cancels to all, loops again
while(!specialCharacters && !numericCharacters && !uppercaseCharacters && !lowercaseCharacters){

  // Pop-Up for Special Characters
  specialCharacters = confirm("Click OK to include Special characters \n  !#$%&'()*+,-./:;<=>?@[]^_`{|}~")
  
  // Pop-Up for Numeric Characters
  numericCharacters = confirm("Click OK to include Numeric characters \n 0123456789")
  
  // Pop-Up for Lowercase Characters
  lowercaseCharacters = confirm("Click OK to include lowercase characters")
  
  // Pop-Up for Uppercase Characters
  uppercaseCharacters = confirm("Click OK to include UPPERCASE characters")
  
}

// User Clicks Ok, adds to userCharacters

if(specialCharacters){
  userCharacters +=specials;
}

if(numericCharacters){
  userCharacters +=numbers;
}

if(lowercaseCharacters){
  userCharacters +=lowercaseLetters;
}

if(uppercaseCharacters){
  userCharacters +=uppercaseLetters;
}

var password = ""
for(var i = 1; i <= characterLength; i++){
  var index = Math.floor(Math.random() * userCharacters.length)
  password = password + userCharacters[index]
}
return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
