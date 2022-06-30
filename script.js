// Assignment code here
var uppercaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbersArr = ["1","2","3","4","5","6","7","8","9","0"];
var symbolsArr = ["!","@","#","$","%","^","&","*","(",")","_","+"]; 
var choices = []
let password = ""; 
//generate random password 
function generatePassword(){ 

  // take in user input first asking for password length
  // ask if they want upper case 
    // if that is so push uppercase array into choices array 
  // ask if they want lowercase 

  // ask if they want nunmbers

  // ask if they want symbols 

 var passwordLength = window.prompt("what is the password length? Enter A number between '8 to 128' to choose");
 var upperCase = window.prompt("do you want uppercase in your password? select 'yes'if you would like to include uppercase characters");
 var lowerCase = window.prompt("do you want lowercase in your password? select 'yes' if you would like to include lowercase characters");
 var numbers = window.prompt("do you want numbers in your password ? select 'yes' if you would like to include numbers");
 var symbols = window.prompt("do you want symbols in your password? select 'yes' if you would like to include symbols");
 

 if (upperCase === "yes") {
   choices = choices.concat(numbersArr); 
 }

 if (lowerCase === "yes") {
   choices = choices.concat(lowercaseArr); 
 }

  if (numbers === "yes") {
   choices = choices.concat(numbersArr); 
 }

 if (symbols === "yes") {
   choices = choices.concat(symbolsArr);
 }
 
  
 
  //create for loop to choose password characters 
  for(var i = 1; i <= passwordLength; i++){ 
      console.log(i); 
    var num  
    password += choices[(Math.floor(Math.random() * (choices.length)))]; 

  } 

  return password;
} 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  console.log("choices"+choices) 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

