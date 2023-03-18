const inputs = document.querySelectorAll(".input");
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
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    " ": "/",
};

const funcs = {
    encoder: (text) => {
        const letters = text.normalize("NFD").toLowerCase().split("");

        const codedLetters = letters.map((letter) => {
            const morseCode = morseCodeList[letter];
            return morseCode || "";
        });

        const codedText = codedLetters.join(" ");
        writeResult(codedText, decoderInput);
    },
    decoder: (morseCode) => {
        const separateMorseCode = morseCode.split(" ");

        const getTheLetterByTheMorseCode = (morseCode) => {
            return Object.keys(morseCodeList).find(
                (letter) => morseCodeList[letter] === morseCode
            );
        };

        const decodedLetters = separateMorseCode.map((morseCode) => {
            return getTheLetterByTheMorseCode(morseCode);
        });

        const decodedText = decodedLetters.join("");
        writeResult(decodedText, encoderInput);
    },
};

const writeResult = (text, input) => {
    input.textContent = text;
};

inputs.forEach((input) => {
    input.onkeyup = input.onkeydown = () => {
        const currentFunc = funcs[input.id];
        currentFunc(input.innerText);
    };
});
