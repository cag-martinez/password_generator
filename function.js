const resultPassword = document.getElementById("result");
const copyPassword = document.getElementById("copy");
const passwordLenght = document.getElementById("length");
const uppercaseLetters = document.getElementById("uppercase");
//const lowercaseLetters = document.getElementById("lowercase");
const numberCharacters = document.getElementById("numbers");
const specialCharacters = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const form = Document.getElementById("passwordForm")

let lowToHighArray = (low, high) => {
    const array = [];
    for (let i = low; i <= high; i++){
        array.push(i);
    }
    return array;
}