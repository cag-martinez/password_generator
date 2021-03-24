const resultPassword = document.getElementById("result");
const copyPassword = document.getElementById("copy");
const passwordLenght = document.getElementById("length");
const uppercaseLetters = document.getElementById("uppercase");
//const lowercaseLetters = document.getElementById("lowercase");
const numberCharacters = document.getElementById("numbers");
const specialCharacters = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const form = document.getElementById("passwordForm")

let lowToHighArray = (low, high) => {
    const array = [" "];
    for (let i = low; i <= high; i++){
        array.push(i);
    }
    return array;
}

const LOWERCASE_CODES = lowToHighArray(97, 122);
const UPPERCASE_CODES = lowToHighArray(65, 90);
const NUMBER_CODES = lowToHighArray(48, 57);
const CHARACTER_CODES = lowToHighArray (33, 47)
    .concat(lowToHighArray(58, 64))
    .concat(lowToHighArray(91, 96))
    .concat(lowToHighArray(123, 126)) 

    console.log(LOWERCASE_CODES);
    console.log(UPPERCASE_CODES);
    console.log(NUMBER_CODES);
    console.log(CHARACTER_CODES);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const characterLength = passwordLenght.nodeValue;
        const includeUppercase = uppercaseLetters.checked;
        const includeNumbers = numberCharacters.checked;
        const includeSymbols = specialCharacters.checked;
        const password = generatePassword(
            characterLength,
            includeUppercase,
            includeNumbers,
            includeSymbols
        );
        resultPassword.innerHTML = password
    });

    