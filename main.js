const encoderInput = document.querySelector("#encoder");
const decoderInput = document.querySelector("#decoder");

const morseCodeList = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  " ": ""
}

function encoder(text) {
  const letters = text.normalize("NFD").toLowerCase().split("");
  const codedLetters = [];

  for (let letter of letters) {
    const morseCode = morseCodeList[letter]; 
    codedLetters.push(morseCode);
  }

  const codedText = codedLetters.join("/");
  writeResult(codedText, decoderInput);
}

function decoder(morseCode) {
  const separateMorseCode = morseCode.split("/");
  const decodedLetters = [];

  const getTheLetterByTheMorseCode = (morseCode) => {
    for(let letter in morseCodeList) {
      if(morseCodeList[letter] === morseCode && morseCodeList.hasOwnProperty(letter)) return letter;
    }
  }

  for (let morse of separateMorseCode) {
    const letter = getTheLetterByTheMorseCode(morse);
    if(letter !== undefined) decodedLetters.push(letter);
  }

  const decodedText = decodedLetters.join("");
  writeResult(decodedText, encoderInput);
}

function writeResult(text, input) {
  input.innerText = text;
}

encoderInput.onkeyup = () => encoder(event.target.innerText);
decoderInput.onkeyup = () => decoder(event.target.innerText);
