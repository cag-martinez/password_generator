//DOM
const resultPassword = document.getElementById("result");
const copyPassword = document.getElementById("copy");
const passwordLenght = document.getElementById("length");
const uppercaseLetters = document.getElementById("uppercase");
//const lowercaseLetters = document.getElementById("lowercase");
const numberCharacters = document.getElementById("numbers");
const specialCharacters = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const form = document.getElementById("passwordForm");


//obtaining character codes from ASCII character table
const LOWERCASE_CODES = lowToHighArray(97, 122);
const UPPERCASE_CODES = lowToHighArray(65, 90);
const NUMBER_CODES = lowToHighArray(48, 57);
const CHARACTER_CODES = lowToHighArray(33, 47)
  .concat(lowToHighArray(58, 64))
  .concat(lowToHighArray(91, 96))
  .concat(lowToHighArray(123, 126));

// testing to make sure i am getting the requested characters
console.log(LOWERCASE_CODES);
console.log(UPPERCASE_CODES);
console.log(NUMBER_CODES);
console.log(CHARACTER_CODES);

// Copy to clipborad
copyPassword.addEventListener("click", () => {
    const textarea = document.createElement('textarea');
    const copyPassword = resultPassword.innerText;
    if (!copyPassword) return;
    textarea.value = copyPassword;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove()
    alert("copied to clipboard")

})

//event listener, checking the options selected and creating the password
form.addEventListener('submit', (e) => {
    e.preventDefault();
  const characterLength = passwordLenght.value;
  const includeUppercase = uppercaseLetters.checked;
  const includeNumbers = numberCharacters.checked;
  const includeSymbols = specialCharacters.checked;
  const password = generatePassword(
    characterLength,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  resultPassword.innerText = password;
  
});

//generating the password
//setting the default password to be lowercase if no option is checked
let generatePassword = (
  characterLength,
  includeUppercase,
  includeNumbers,
  includeSymbols
) => {
  let charCodes = LOWERCASE_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
  if (includeSymbols) charCodes = charCodes.concat(CHARACTER_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
  const passwordChar = [];
  for (let i = 0; i < characterLength; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordChar.push(String.fromCharCode(characterCode));
  }
  return passwordChar.join("");
};

//for loop to increment until the highest value is achieved
function lowToHighArray(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
    
  };
