//Created parameterized function here to generate password using all parameters required
function genPass(len, upper, lower, nums, special) {
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  //Checking if user selected any parameter or not
  let chars = "";
  if (lower) chars += lowerChars;
  if (upper) chars += upperChars;
  if (nums) chars += numChars;
  if (special) chars += specialChars;
  if (!chars) return "";
  let pass = "";

  //for loop is used to loop selected parameters
  for (let i = 0; i < len; i++) {
    //charAt gives character at its index
    //Math.floor returns integer value
    //Math.random returns a random value from 0 to 1 includes desimal value eg.- 0.16275416
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

function generate() {
  //converdet string value into integer
  const len = parseInt(document.getElementById("len").value);
  const upper = document.getElementById("upper").checked;
  const lower = document.getElementById("lower").checked;
  const nums = document.getElementById("nums").checked;
  const special = document.getElementById("special").checked;
  const pass = genPass(len, upper, lower, nums, special);
  document.getElementById("passOut").textContent = pass
    ? pass
    : "Select at least one option";
}

function copyPassword() {
  const passOut = document.getElementById("passOut");
  //checking if user selected atleast one parameter or not
  if (
    passOut.textContent &&
    passOut.textContent !== "Your password will appear here" &&
    passOut.textContent !== "Select at least one option"
  ) {
    //generated password copied to clipboard using below code
    navigator.clipboard.writeText(passOut.textContent);
    passOut.textContent = "Password copied!";
    //after password copied to clipboard another password is automatically generated after 1sec duration
    setTimeout(generate, 1000);
  }
}
