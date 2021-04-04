/* ---- RANDOM CODES ---- */
//Note: submit button is initially disable upon loadin of this page - see <body> in html

//Create variables to store generated codes and the type of characters we want to show as codes
var code = ' '; //initialize to null value
var getCode = ' '; //to share entered code
var btnvalue; //for button boolean value
//create variable to hold the type of characters we want to show as codes
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

//Function to generate combination of characters
function generateCode() {
  //Generate character multiple times using a loop
  for(var i = 1; i <= 8; i++) {
    var char = Math.random() * str.length; //random select a character from the variable and then store in a new variable
    code += str.charAt(char); //accumulate the generated character into a string of 8 characters
  }
  return code; //return the final accumulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable button : determine when to able or disbale button
function disableButton(btnvalue) {
  document.getElementById("submit").disabled = btnvalue; //able/disable button

  if(btnvalue == true) { //test if button disable or enabled
  //set button and label color translucent
  document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
  document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    //set button and label color with no transparency
    document.getElementById("submit").style.backgroundColor = "rgbs(73, 119, 209, 1)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
  }
}

//Listen to user input code
var codebox = document.getElementById("codeentered"); //get textbox
codebox.addEventListener("input", evaluateCode); //Listen to code entered in textbox

//run function if detected user had entered a character in textbox
function evaluateCode() {
  getCode = document.getElementById("codeentered").value; //get character entered
  var charset1 = getCode.trim(); //remove any hidden characters entered
  var charset2 = code.trim() //remove any hidden characters generated
  //text if code entered matches the number of generated characters
  if(charset1.length == charset2.length && charset1 == charset2) {
    disableButton(false) //if match, run the function to enable button
  }
}

//Activate function
disableButton();